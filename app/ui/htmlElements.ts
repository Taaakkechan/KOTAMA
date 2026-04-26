function requireElementById(id: string) {
	const element = document.getElementById(id);
	if (!element) {
		throw new Error(`Could not find element with id ${id}`);
	}
	return element;
}
function getButton(id: string): HTMLButtonElement {
	return requireElementById(id) as HTMLButtonElement;
}
function getDiv(id: string): HTMLDivElement {
	return requireElementById(id) as HTMLDivElement;
}
function getInput(id: string): HTMLInputElement {
	return requireElementById(id) as HTMLInputElement;
}
export const taskDBList = getDiv('dataBase');
export const mustDoListDiv = getDiv('mustDo');
export const toDoListDiv = getDiv('toDo');
export const scheduleListDiv = getDiv('schedule');


export const mainApp = getDiv('main');
export const createNewTask = getButton('createNewTask');

export const taskEditWindow = {
	divs: {
		main: getDiv('taskEditWindow'),
		schedule: getDiv('taskEditWindow-schedule'),
		repeat: getDiv('taskEditWindow-repeat'),
		dependancyList: getDiv('taskEditWindow-dependancyList'),
		componentList: getDiv('taskEditWindow-componentList'),
		subjectList: getDiv('taskEditWindow-subjectList'),
		ownerList: getDiv('taskEditWindow-ownerList'),
		componentTaskSearch: getDiv('taskEditWindow-component-taskSearch'),
		dependancyTaskSearch: getDiv('taskEditWindow-dependancy-taskSearch'),
	},
	buttons: {
		saveEdit: getButton('taskEditWindow-saveEdit'),
		cancelEdit: getButton('taskEditWindow-cancelEdit'),
		deleteTask: getButton('taskEditWindow-deleteTask'),
		addDependancy: getButton('taskEditWindow-addDependancy'),
		addComponent: getButton('taskEditWindow-addComponent')
	},
	inputs: {
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
}



// export const scheduleDiv = getDiv('schedule');