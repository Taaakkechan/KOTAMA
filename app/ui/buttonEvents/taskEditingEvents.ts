import { updateAllLists } from 'app/ui/taskList';
import { getCurrentState } from 'app/currentState';
import { removeComponent, removeDependancy, initTask } from 'app/task';
import { divDisplay } from 'app/ui/display';
import { taskEditWindow } from 'app/ui/htmlElements';
import { removeTask, insertTask	} from 'app/dataBase';
import { getTaskValue } from 'app/ui/taskEditing';

const currentState = getCurrentState();

const tewb = taskEditWindow.buttons;

export function taskEditingStaticEvents(): void {
	// just directly assigns the function to the HTMLButtonElements

	// save edit
	tewb.saveEdit.addEventListener('click', function () {
		divDisplay(taskEditWindow.divs.main, false);
		getTaskValue(currentState.tempTask);
		insertTask(currentState.tempTask);
		currentState.tempTask = initTask();
		updateAllLists();
	})

	// cancel edit
	tewb.cancelEdit.addEventListener('click', function () {
		divDisplay(taskEditWindow.divs.main, false);
		currentState.tempTask = initTask();
	})

	// delete edit
	tewb.deleteTask.addEventListener('click', function () {
		divDisplay(taskEditWindow.divs.main, false);
		removeTask(currentState.tempTask.id);
		currentState.tempTask = initTask();
		updateAllLists();
	})
}


// I have no idea how the program will like the cross reference with using this function in updateLists

const tewd = taskEditWindow.divs

// component search onclick
export function componentSearchOnclick(taskBlock: HTMLButtonElement): void {
	const compId = Number(taskBlock.value);
	currentState.tempTask.components.push(compId);
	updateAllLists();
	divDisplay(tewd.componentTaskSearch, false);		
}

// dependancy search onclick
export function dependancySearchOnclick(taskBlock: HTMLButtonElement): void {
	const depId = Number(taskBlock.value);
	currentState.tempTask.dependancies.push(depId);
	updateAllLists();
	divDisplay(tewd.dependancyTaskSearch, false);		
}

// component onclick
export function editingComponentOnclick(taskBlock: HTMLButtonElement): void {
	const compId = Number(taskBlock.value);
	removeComponent(currentState.tempTask, compId);
	updateAllLists();
}

// dependancy onclick
export function editingDependancyOnclick(taskBlock: HTMLButtonElement): void {
	const depId = Number(taskBlock.value);
	removeDependancy(currentState.tempTask, depId);
	updateAllLists();
}
