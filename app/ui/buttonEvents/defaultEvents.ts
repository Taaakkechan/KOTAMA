import { currentState } from 'app/currentState';
import { deepCloneTask } from 'app/task';
import { divDisplay } from 'app/ui/display';
import { taskEditWindow, createNewTask } from 'app/ui/htmlElements';
import { getTaskById, dataBase } from 'app/dataBase';
import { populateEditWindow } from 'app/ui/taskEditing';
// import { updateAllLists } from 'app/ui/taskList';

// const currentState = getCurrentState();

export function defaultStaticEvents(): void {
	// just directly assigns the function to the HTMLElements

	// new task
	createNewTask.addEventListener('click', function () {
		currentState.tempTask.id = dataBase.nextId;
		populateEditWindow(currentState.tempTask);
		divDisplay(taskEditWindow.divs.main, true);
	})
}

// default behavior of clicking a task block
export function taskBlockOnclick(taskBlock: HTMLButtonElement): void {
	const task = getTaskById(Number(taskBlock.value));
	currentState.tempTask = deepCloneTask(task);
	populateEditWindow(currentState.tempTask);
	divDisplay(taskEditWindow.divs.main, true);
}