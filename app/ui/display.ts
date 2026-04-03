import { taskEditWindow, taskDBList } from 'app/ui/htmlElements';
import { getTaskById, getTaskDependancies, getTaskComponents } from 'app/dataBase';


export function displayTaskList(list: Task[], element: HTMLElement, classes: string): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
		let title = list[i].title
		const id = list[i].id
			if (title === '') {
				title = '(no title)';
			}
			listHTML += '<br><button value="' + String(id) + '" class="' + classes + '">' + title + '</button>';
		}
	element.innerHTML = listHTML;
}

export function displayPersonList(list: string[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i] + '</button>';
		}
	id.innerHTML = listHTML;
}

export function divDisplay(element: HTMLElement, display: boolean): void {
	if (display) {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
	
}

export function updateTaskEditWindowDisplay(): void {
	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	// fix so we change value of container instead of input itself
	if (tewi.isEvent.checked) {
		tewi.isDone.style.display = 'none';
	} else {
		tewi.isDone.style.display = 'block';
	}

	if (tewi.isSchedule.checked) {
		tewd.schedule.style.display = 'block';

		if (tewi.isRepeating.checked) {
			tewd.repeat.style.display = 'block';

			if (tewi.isRepeatEnd.checked) {
				tewi.repeatEnd.style.display = 'block';
			} else {
				tewi.repeatEnd.style.display = 'none';
			}
		} else {
			tewd.repeat.style.display = 'none';
		}
	} else {
		tewd.schedule.style.display = 'none';
	}
}

export function getListIndex(list: HTMLElement): number {
	let Index = [...list.children].indexOf(event?.target as Element);
	// schinanigins
	return (Index - 1) / 2;
}

export function updateLists(dataBase: DataBase, currentTaskId: number): void {
	const task = getTaskById(currentTaskId, dataBase);
	const dependancies = getTaskDependancies(task, dataBase);
	const components = getTaskComponents(task, dataBase);
	displayTaskList(dataBase.content, taskDBList, 'dataBaseList');
	displayTaskList(dataBase.content, taskEditWindow.divs.componentTaskSearch, 'taskSearchList');
	displayTaskList(dataBase.content, taskEditWindow.divs.dependancyTaskSearch, 'taskSearchList');
	displayTaskList(components, taskEditWindow.divs.componentList, 'taskComponents');
	displayTaskList(dependancies, taskEditWindow.divs.dependancyList, 'taskDependancies');
}