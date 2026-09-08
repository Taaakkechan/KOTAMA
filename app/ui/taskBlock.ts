import { taskBlockOnclick } from 'app/ui/buttonEvents/defaultEvents';

import { currentState } from 'app/currentState';
import { dataBase } from 'app/dataBase';
import { schedule } from 'app/schedule';
import { taskEditWindow, taskDBList, scheduleListDiv } from 'app/ui/htmlElements';

// clickAction: (taskBlock: HTMLElement) => void for when we need it again
function createNewBlock(parent: HTMLElement, task: Task, clickAction: (taskBlock: HTMLElement) => void): void {
	let text = task.title
	if (text === '') {
		text = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(text);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.id));
	newButton.setAttribute('class', 'defaultBLock');
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}

function createNewCalendarBlock(parent: HTMLElement, task: ScheduledTask, clickAction: (taskBlock: HTMLElement) => void): void {
	let text = task.title
	if (text === '') {
		text = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(text);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.occurenceID));
	newButton.setAttribute('class', 'defaultBLock');
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}


export function removeAllTaskBlock(parent: HTMLElement): void {
	parent.replaceChildren();
}

export function updateTaskListUi(parent: HTMLElement, taskList: Task[], clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewBlock(parent, task, clickAction);
	}
}

export function updateCalendarListUi(parent: HTMLElement, taskList: ScheduledTask[], clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewCalendarBlock(parent, task, clickAction);
	}
}

export function updateAllListUi(): void {
	updateTaskListUi(taskDBList, dataBase.tasks, taskBlockOnclick);
	updateCalendarListUi(scheduleListDiv, schedule.tasks, taskBlockOnclick);
}
