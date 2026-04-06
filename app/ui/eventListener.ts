import { saveData } from 'app/dataBase';
import { initTask, deepCloneTask } from 'app/task';
import { insertTaskValue, getTaskValue, saveEdit, cancelEdit, deleteTask } from 'app/ui/taskEdit';
import { getListIndex, divDisplay, updateLists } from 'app/ui/display';
import { taskEditWindow, taskDBList, createNewTask } from 'app/ui/htmlElements';

export function addEventListeners(currentState: CurrentState, dataBase: DataBase) {

	createNewTask.onclick = ()=> {
		currentState.taskId = dataBase.nextId;
		insertTaskValue(currentState.tempTask);
		divDisplay(taskEditWindow.divs.main, true);
	}

	taskDBList.onclick = ()=> {
		const taskIndex = getListIndex(taskDBList);

		if (taskIndex >= 0) {
			const originalTask = dataBase.tasks[taskIndex];
			currentState.taskId = originalTask.id;
			currentState.tempTask = deepCloneTask(originalTask);

			insertTaskValue(currentState.tempTask);
			divDisplay(taskEditWindow.divs.main, true);
		}
		updateLists(dataBase);
	}


	// taskEditWindow buttons / divs
	taskEditWindow.buttons.addDependancy.onclick = ()=> {
		divDisplay(taskEditWindow.divs.dependancyTaskSearch, true);
	}

	taskEditWindow.buttons.addComponent.onclick = ()=> {
		divDisplay(taskEditWindow.divs.componentTaskSearch, true);
	}

	taskEditWindow.divs.componentTaskSearch.onclick = ()=> {
		const taskIndex = getListIndex(taskEditWindow.divs.componentTaskSearch);
		if (taskIndex >= 0) {
			currentState.tempTask.components.push(dataBase.tasks[taskIndex].id);
			updateLists(dataBase);
		}
		divDisplay(taskEditWindow.divs.componentTaskSearch, false);
	}

	taskEditWindow.divs.dependancyTaskSearch.onclick = ()=> {
		const taskIndex = getListIndex(taskEditWindow.divs.dependancyTaskSearch);
		if (taskIndex >= 0) {
			currentState.tempTask.dependancies.push(dataBase.tasks[taskIndex].id);
			updateLists(dataBase);
		}
		divDisplay(taskEditWindow.divs.dependancyTaskSearch, false);
	}


	taskEditWindow.buttons.saveEdit.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
		getTaskValue(currentState.tempTask);
		saveEdit(currentState.taskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase);
	}
	taskEditWindow.buttons.cancelEdit.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
		cancelEdit(dataBase);
	}
	taskEditWindow.buttons.deleteTask.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
		deleteTask(currentState.taskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase);
	}
}