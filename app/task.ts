export function getTotalDuration(task: Task): number {
	if (task.components) {
		let duration = 0;
		for (let i = 0; i < task.components.length; i++) {
			if (task.components[i].duration) {
				duration += task.components[i].duration!;
			} else {throw new Error('duration undefined');}
		}
		return duration;
	} else {throw new Error('components undefined');} 
}

function isOverlapping(task1: Task, task2: Task): boolean {
	if (task1.due && task2.due && task1.start && task2.start) {
		if (!((task1.start > task2.due) || (task2.start > task1.due))) {
			return true;
		} 
		return false;
	} else {throw new Error('task due/start undefined');}
}

function findOverlappingTasks(tasks: Task[], schedule: Schedule): Task[] {

	// get the start and end of the tasks
	if (tasks[0].start && tasks[0].due) {
		let startTask = tasks[0];
		let dueTask = tasks[0];

		for (let i=1; i < tasks.length; i++) {
			if (tasks[i].start && tasks[i].due) {
				if (tasks[i].start! < startTask.start!) {
					startTask = tasks[i];
				}
				if (tasks[i].due! > dueTask.due!) {
					dueTask = tasks[i];
				}
			}
		}
		// compare the start and due with all the other tasks in the schedule
		const taskSchedule = schedule.content
		for (let i = 0; i < taskSchedule.length; i++) {
			if (taskSchedule[i].start && taskSchedule[i].due) {
				if (!((dueTask.due! < taskSchedule[i].start!) || (startTask.start! > taskSchedule[i].due!))) {
					tasks.push(taskSchedule[i]);
				}
			} 
		}
	} else {throw new Error('initialTask start/due undefined')}
	return tasks;
}

export function findAllOverlap(task: Task, schedule: Schedule): Task[] {
	let tasks = [task];
	let initialTasks = tasks;
	let updatedTasks = findOverlappingTasks(initialTasks, schedule);
	while (initialTasks.length != updatedTasks.length) {
		initialTasks = updatedTasks;
		updatedTasks = findOverlappingTasks(initalTasks, schedule);
	}
	return updatedTasks;
}

function isValid(tasks: Task[]): boolean {
	if (tasks[0].start && tasks[0].due) {
		let startTask = tasks[0];
		let dueTask = tasks[0];

		for (let i=1; i < tasks.length; i++) {
			if (tasks[i].start && tasks[i].due) {
				if (tasks[i].start! < startTask.start!) {
					startTask = tasks[i];
				}
				if (tasks[i].due! > dueTask.due!) {
					dueTask = tasks[i];
				}
			}
		}
	}
}
