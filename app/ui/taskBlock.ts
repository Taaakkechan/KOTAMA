import { editingDependancyOnclick, 
		editingComponentOnclick, 
		dependancySearchOnclick,
		componentSearchOnclick } from 'app/ui/buttonEvents/taskEditingEvents';

import { taskBlockOnclick } from 'app/ui/buttonEvents/defaultEvents';

import { currentState } from 'app/currentState';
import { dataBase } from 'app/dataBase';
import { schedule } from 'app/schedule';
import { taskEditWindow, taskDBList, scheduleListDiv } from 'app/ui/htmlElements';
import { getTaskDependancies, getTaskComponents } from 'app/task';


function createNewBlock(parent: HTMLElement, task: Task, clickAction: (taskBlock: HTMLElement) => void): void {
	if (task.title === '') {
		task.title = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(task.title);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.id));
	newButton.setAttribute('class', 'defaultBLock');
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}

function createNewSearchBlock(parent: HTMLElement, task: Task, clickAction: (taskBlock: HTMLElement) => void): void {
	if (task.title === '') {
		task.title = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(task.title);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.id));
	newButton.setAttribute('class', 'searchBlock');
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}

function createNewCalendarBlock(parent: HTMLElement, task: ScheduledTask, clickAction: (taskBlock: HTMLElement) => void): void {
	if (task.title === '') {
		task.title = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(task.title);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.id));
	newButton.setAttribute('class', 'calendarBlock');
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}


export function removeAllTaskBlock(parent: HTMLElement): void {
	parent.replaceChildren();
}

export function updateDefaultListUi(parent: HTMLElement, taskList: Task[], clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewBlock(parent, task, clickAction);
	}
}

export function updateSearchListUi(parent: HTMLElement, taskList: Task[], clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewSearchBlock(parent, task, clickAction);
	}
}

export function updateCalendarListUi(parent: HTMLElement, taskList: ScheduledTask[], clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewCalendarBlock(parent, task, clickAction);
	}
}

export function updateAllListUi(): void {
	const tewd = taskEditWindow.divs;
	const task = currentState.tempTask;

	updateDefaultListUi(taskDBList, dataBase.tasks, taskBlockOnclick);
	updateCalendarListUi(scheduleListDiv, schedule.tasks, taskBlockOnclick);

	updateSearchListUi(tewd.componentTaskSearch, dataBase.tasks, componentSearchOnclick);
	updateSearchListUi(tewd.dependancyTaskSearch, dataBase.tasks, dependancySearchOnclick);
	updateDefaultListUi(tewd.componentList, getTaskComponents(task), editingComponentOnclick);
	updateDefaultListUi(tewd.dependancyList, getTaskDependancies(task), editingDependancyOnclick);

}
