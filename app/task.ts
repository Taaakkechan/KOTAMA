import { getCurrentTime } from 'app/date';
import { getTaskById } from 'app/dataBase';

export function initTask(): Task {
	const now = getCurrentTime();
	const occurrence: TaskOccurrence = {
		id: '0T0',
		title: undefined,
		start: now + 60 - (now % 60),
		due: now + 120 - (now % 60),
		repeating: undefined
	}

	const newTask: Task = {
		id: 0,
		title: '',
		description: '',
		priority: 1,
		duration: 60,
		occurrences: [occurrence],
		completed: []
	}
	return newTask;
}




export function getFirstInstance(occurrence: TaskOccurrence): TaskInstance {
	const baseTask = getTaskById(getTaskIDByOccurrenceID(occurrence.id));
	let startTime = occurrence.start;
	let dueTime = occurrence.due;
	if (occurrence.repeating) {
		for (const doneOccur in baseTask.completed) {
			if (occurrence.id === doneOccur.id) {
				// still working on this part (not sure how I'm setting repeatEnd)
				console.log('set startTime to the next instance after the repeatEnd of completed')
			}
		}
	}
	const instance: TaskInstance = {
		occurrenceID: occurrence.id,
		start: startTime,
		due: dueTime,
	}
	return 
}

export function deepCloneTask(originalTask: Task): Task {
	return JSON.parse(JSON.stringify(originalTask));
}