import { getCurrentState } from 'app/currentState';
import { deepCloneTask } from 'app/task';
import { divDisplay } from 'app/ui/display';
import { taskEditWindow, createNewTask } from 'app/ui/htmlElements';
import { getTaskById, getDataBase } from 'app/dataBase';
import { insertTaskValue } from 'app/ui/taskEditing';

const currentState = getCurrentState();

export function defaultStaticEvents(): void {
	// just directly assigns the function to the HTMLElements


	const dataBase = getDataBase();

	// new task
	createNewTask.addEventListener('click', function () {
		currentState.tempTask.id = dataBase.nextId;
		insertTaskValue(currentState.tempTask);
		divDisplay(taskEditWindow.divs.main, true);
	})
}

// default behavior of clicking a task block
export function taskBlockOnclick(taskBlock: HTMLButtonElement): void {
	const task = getTaskById(Number(taskBlock.value));
	currentState.tempTask = deepCloneTask(task);
	insertTaskValue(currentState.tempTask);
	divDisplay(taskEditWindow.divs.main, true);
}