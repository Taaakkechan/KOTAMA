import { initTask } from 'app/task';

export let currentState: CurrentState;

function inititalizeCurrentState(): CurrentState {
	const initalState: CurrentState = {
		tempTask: initTask()
	}
	return initalState;
}

export function loadInitialState(): void {
	currentState = inititalizeCurrentState();
}

// not working for some reason. Seems like it is reading off a different object?
// saids that tempTask is undefined.
// for now, I'll just export it directly. (without passing it through getState)
// export function getCurrentState(): CurrentState {
// 	return currentState;
// }