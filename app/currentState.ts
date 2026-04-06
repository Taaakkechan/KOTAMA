import { initTask } from 'app/task';

let currentState: CurrentState;

export function inititalizeCurrentState(): CurrentState {
	const initalState: CurrentState = {
		taskId: 0;
		tempTask: initTask();
	}
	return initalState;
}

export function getCurrentState(): CurrentState {
	return currentState;
}