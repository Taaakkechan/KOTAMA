import { editingDependancyOnclick, 
		editingComponentOnclick, 
		dependancySearchOnclick,
		componentSearchOnclick } from 'app/ui/buttonEvents/taskEditingEvents';

import { taskBlockOnclick } from 'app/ui/buttonEvents/defaultEvents';

import { currentState } from 'app/currentState';
import { dataBase } from 'app/dataBase';
import { taskEditWindow, taskDBList } from 'app/ui/htmlElements';
import { getTaskDependancies, getTaskComponents } from 'app/task';


function createNewTaskBlock(parent: HTMLElement, task: Task, clickAction: (taskBlock: HTMLElement) => void, className: string): void {
	if (task.title === '') {
		task.title = '(no title)';
	}
	const newButton = document.createElement('button');
	const buttonTitle = document.createTextNode(task.title);
	newButton.appendChild(buttonTitle);
	newButton.setAttribute('value', String(task.id));
	newButton.setAttribute('class', className);
	newButton.addEventListener('click', function() {clickAction(this)});
	parent.append(newButton);
}

export function removeAllTaskBlock(parent: HTMLElement): void {
	parent.replaceChildren();
}

export function updateHtmlLists(taskList: Task[], parent: HTMLElement, className: string, clickAction: (taskBlock: HTMLElement) => void): void {
	removeAllTaskBlock(parent);
	for (const task of taskList) {
		createNewTaskBlock(parent, task, clickAction, className);
	}
}

export function updateAllLists(): void {
	const tewd = taskEditWindow.divs;
	const task = currentState.tempTask;

	updateHtmlLists(dataBase.tasks, taskDBList, 'taskBlock', taskBlockOnclick);

	updateHtmlLists(dataBase.tasks, tewd.componentTaskSearch, 'taskSearchBlock', componentSearchOnclick);
	updateHtmlLists(dataBase.tasks, tewd.dependancyTaskSearch, 'taskSearchBlock', dependancySearchOnclick);
	updateHtmlLists(getTaskComponents(task), tewd.componentList, 'taskBlock', editingComponentOnclick);
	updateHtmlLists(getTaskDependancies(task), tewd.dependancyList, 'taskBlock', editingDependancyOnclick);

}
