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
// function getInput(id: string): HTMLInputElement {
// 	return requireElementById(id) as HTMLInputElement;
// }
export const taskDBDiv = getDiv('taskDBList');
export const taskListDiv = {
	mustDo: getDiv('mustDo'),
	toDo: getDiv('toDo')
}

export const taskEditWindow = {
	title: getDiv('taskTitleInput')
	schedulingOption = {
		
	}
}

export const scheduleDiv = getDiv('schedule');