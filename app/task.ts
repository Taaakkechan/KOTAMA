// export function getTotalDuration(tasks: Task[]): number {
// 	let duration = 0;
// 	for (let i = 0; i < tasks.length; i++) {
// 		if (tasks[i].duration) {
// 			duration += tasks[i].duration!;
// 		} else {throw new Error('duration undefined');}
// 	}	return duration;
// }


// function findOverlappingTasks(tasks: Task[], schedule: Schedule): Task[] {

// 	// get the start and end of the tasks
// 	if (tasks[0].start && tasks[0].due) {
// 		let startTask = tasks[0];
// 		let dueTask = tasks[0];

// 		for (let i=1; i < tasks.length; i++) {
// 			if (tasks[i].start && tasks[i].due) {
// 				if (tasks[i].start! < startTask.start!) {
// 					startTask = tasks[i];
// 				}
// 				if (tasks[i].due! > dueTask.due!) {
// 					dueTask = tasks[i];
// 				}
// 			}
// 		}
// 		// compare the start and due with all the other tasks in the schedule
// 		const taskSchedule = schedule.content
// 		for (let i = 0; i < taskSchedule.length; i++) {
// 			if (taskSchedule[i].start && taskSchedule[i].due) {
// 				if (!((dueTask.due! < taskSchedule[i].start!) || (startTask.start! > taskSchedule[i].due!))) {
// 					tasks.push(taskSchedule[i]);
// 				}
// 			} 
// 		}
// 	} else {throw new Error('initialTask start/due undefined')}
// 	return tasks;
// }

// function isValid(task: Task, schedule: Schedule): boolean {

// 	// finds all the chained overlapping tasks.
// 	// maybe able to include it in the findOVerlappingTasks function
// 	let tasks = [task];
// 	let initialTasks = tasks;
// 	let updatedTasks = findOverlappingTasks(initialTasks, schedule);
// 	while (initialTasks.length != updatedTasks.length) {
// 		initialTasks = updatedTasks;
// 		updatedTasks = findOverlappingTasks(initialTasks, schedule);
// 	}
// 	tasks = updatedTasks;

// 	// gets the start and due for a group of function again. 
// 	// could separate it into a function (get start/ get end)
// 	if (tasks[0].start && tasks[0].due) {
// 		let startTask = tasks[0];
// 		let dueTask = tasks[0];

// 		for (let i=1; i < tasks.length; i++) {
// 			if (tasks[i].start && tasks[i].due) {
// 				if (tasks[i].start! < startTask.start!) {
// 					startTask = tasks[i];
// 				}
// 				if (tasks[i].due! > dueTask.due!) {
// 					dueTask = tasks[i];
// 				}
// 			}
// 		}

// 		// actually compare the duration and the window
// 		const totalDuration = getTotalDuration(tasks);
// 		if (startTask.due! - startTask.start! > totalDuration) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {throw new Error('initial Task start/due undefined');}
// }
import { taskEditWindowInputs, taskEditWindowDivs } from 'app/htmlElements';
import { numberToDateString, getCurrentTime } from 'app/date';
import { displayTaskList, displayPersonList } from 'app/ui';

function defaultTask(): Task {
	const now = getCurrentTime();
	const times: Scheduling = {
		start: now + 60 - (now % 60),
		due: now + 120 - (now % 60),
		duration: 60
	}

	const newTask: Task = {
		title: '',
		description: '',
		scheduling: times,
		priority: 1,
		dependancies: [],
		components: [],
		subjects: [],
		owner: ['user'],
		completed: false
	}
	return newTask;
}

function insertTaskInfo(task: Task): void {

	const tewi = taskEditWindowInputs
	const tewd = taskEditWindowDivs

	if (task.completed != null) {
			tewi.isDone.checked = task.completed;
	} else {
		tewi.isEvent.checked = true;
	}

	tewi.title.value = task.title;
	if (task.scheduling === 'pending') {
		tewi.isPending.checked = true;
	} else if (task.scheduling === 'none') {
		tewi.isNone.checked = true;
	} else {
		const schedule = task.scheduling ;
		tewi.isSchedule.checked = true;
		tewi.start.value = String(numberToDateString(schedule.start));
		tewi.due.value = String(numberToDateString(schedule.due));
		tewi.duration.value = String(schedule.duration);
		if (schedule.repeating) {
			const repeating = schedule.repeating;
			tewi.isRepeating.checked = true;
			tewi.repeatFreq.value = String(repeating.repeatFreq);
			tewi.repeatStart.value = String(repeating.repeatStart);
			if (repeating.repeatEnd) {
				tewi.isRepeatEnd.checked = true;
				tewi.repeatEnd.value = String(repeating.repeatEnd);
			}
		}

	}
	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
	displayTaskList(task.dependancies, tewd.dependancyList);
	displayTaskList(task.components, tewd.componentList);
	displayPersonList(task.subjects, tewd.subjectList);
	displayPersonList(task.owner, tewd.ownerList);
}

function saveTask(task: Task): void {

	const tewi = taskEditWindowInputs

	task.title = tewi.title.value
	if (!tewi.isEvent.checked) {
		task.completed = tewi.isDone.checked
	}
	if (tewi.isPending.checked) {
		task.scheduling = 'pending';
	} else if (tewi.isNone.checked) {
		task.scheduling = 'none';
	} else {
		let repeat = undefined;
		if (tewi.isRepeating.checked) {
			let repeatEnd = undefined;
			let exceptionIn = [] as ScheduledTask[];
			let exceptionOut = [] as ScheduledTask[];
			if (tewi.isRepeatEnd.checked) {
				repeatEnd = Number(tewi.repeatEnd.value);
			}
			if (task.scheduling != 'pending' && task.scheduling != 'none') {
				if (task.scheduling.repeating) {
					exceptionIn = task.scheduling.repeating.exceptionIn;
					exceptionOut = task.scheduling.repeating.exceptionIn;
				}
			}
			repeat = {
				repeatFreq: Number(tewi.repeatFreq.value),
				repeatStart: Number(tewi.repeatStart.value),
				repeatEnd: repeatEnd,
				exceptionIn: exceptionIn,
				exceptionOut: exceptionOut,
			}
		}
		task.scheduling = {
			start: Number(tewi.start.value),
			due: Number(tewi.due.value),
			duration: Number(tewi.duration.value),
			repeating: repeat
		}
	}
	task.priority = Number(tewi.priority.value);
	task.description = tewi.description.value;
}
export function newTask(): void {
	insertTaskInfo(defaultTask());
}
