import { initTask, getFirstInstance } from 'app/task';

export let currentState: CurrentState;

export function initializeState(): void {
	const defaultTask = initTask();
	const occurrence = defaultTask.occurrences[0];
	const instance = getFirstInstance(occurrence);
	
	currentState = {
		tempTask: defaultTask,
		tempOccur: occurrence,
		tempInst: instance
	}
}

// not working for some reason. Seems like it is reading off a different object?
// saids that tempTask is undefined.
// for now, I'll just export it directly. (without passing it through getState)
// export function getCurrentState(): CurrentState {
// 	return currentState;
// }