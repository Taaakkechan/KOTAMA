export function getTotalDuration(tasks: Task[]): number {
	let duration = 0;
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].duration) {
			duration += tasks[i].duration!;
		} else {throw new Error('duration undefined');}
	}	return duration;
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

function isValid(task: Task, schedule: Schedule): boolean {

	// finds all the chained overlapping tasks.
	// maybe able to include it in the findOVerlappingTasks function
	let tasks = [task];
	let initialTasks = tasks;
	let updatedTasks = findOverlappingTasks(initialTasks, schedule);
	while (initialTasks.length != updatedTasks.length) {
		initialTasks = updatedTasks;
		updatedTasks = findOverlappingTasks(initialTasks, schedule);
	}
	tasks = updatedTasks;

	// gets the start and due for a group of function again. 
	// could separate it into a function (get start/ get end)
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

		// actually compare the duration and the window
		const totalDuration = getTotalDuration(tasks);
		if (startTask.due! - startTask.start! > totalDuration) {
			return true;
		} else {
			return false;
		}
	} else {throw new Error('initial Task start/due undefined');}
}


