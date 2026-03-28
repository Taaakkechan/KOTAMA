function requireElementById(id: string) {
	const element = document.getElementById(id);
	if (!element) {
		throw new Error(`Could not find element with id ${id}`);
	}
	return element;
}
// function getButton(id: string): HTMLButtonElement {
// 	return requireElementById(id) as HTMLButtonElement;
// }
function getDiv(id: string): HTMLDivElement {
	return requireElementById(id) as HTMLDivElement;
}
function getInput(id: string): HTMLInputElement {
	return requireElementById(id) as HTMLInputElement;
}
export const taskDBDiv = getDiv('taskDBList');
// export const taskListDiv = {
// 	mustDo: getDiv('mustDo'),
// 	toDo: getDiv('toDo')
// }
export const taskEditWindow = getInput('taskEditWindow');
export const taskEditWindowDivs = {
	schedule: getDiv('taskEditWindow-schedule'),
	repeat: getDiv('taskEditWindow-repeat'),
	dependancyList: getDiv('taskEditWindow-dependancyList'),
	componentList: getDiv('taskEditWindow-componentList'),
	subjectList: getDiv('taskEditWindow-subjectList'),
	ownerList: getDiv('taskEditWindow-ownerList'),
}

export const taskEditWindowInputs = {
	title: getInput('taskEditWindow-taskTitle'),
	isDone: getInput('taskEditWindow-isTaskDone'),
	isEvent: getInput('taskEditWindow-isEvent'),
	isSchedule: getInput('taskEditWindow-isSchedule'),
	isPending: getInput('taskEditWindow-isPending'),
	isNone: getInput('taskEditWindow-isNone'),
	start: getInput('taskEditWindow-start'),
	due: getInput('taskEditWindow-due'),
	isRepeating: getInput('taskEditWindow-isRepeating'),
	repeatFreq: getInput('taskEditWindow-repeatFreq'),
	repeatStart: getInput('taskEditWindow-repeatStartDate'),
	isRepeatEnd: getInput('taskEditWindow-isRepeatEnd'),
	repeatEnd: getInput('taskEditWindow-repeatEndDate'),
	duration: getInput('taskEditWindow-duration'),
	priority: getInput('taskEditWindow-priority'),
	description: getInput('taskEditWindow-description')
}



// export const scheduleDiv = getDiv('schedule');