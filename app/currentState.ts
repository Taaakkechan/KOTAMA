import { initTask } from 'app/task';

let currentState: CurrentState;

export function inititalizeCurrentState(): CurrentState {
	const initalState: CurrentState = {
		tempTask: initTask()
	}
	return initalState;
}

export function getCurrentState(): CurrentState {
	return currentState;
}