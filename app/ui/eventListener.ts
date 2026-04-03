import { saveData } from 'app/dataBase';
import { insertTaskValue, saveEdit, deleteTask } from 'app/ui/taskEdit';
import { getListIndex, divDisplay, updateLists } from 'app/ui/display';
import { taskEditWindow, taskDBList, createNewTask } from 'app/ui/htmlElements';

export function eventListener(currentTaskId: number, dataBase: DataBase) {

	createNewTask.onclick = ()=> {
		currentTaskId = dataBase.nextId;
		insertTaskValue(dataBase.defaultTask);
		divDisplay(taskEditWindow.divs.main, true);
	}

	taskDBList.onclick = ()=> {
		const taskIndex = getListIndex(taskDBList);
		if (taskIndex >= 0) {
			currentTaskId = dataBase.content[taskIndex].id;
			dataBase.defaultTask = dataBase.content[taskIndex]
		insertTaskValue(dataBase.defaultTask);
		divDisplay(taskEditWindow.divs.main, true);
		}	
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
			divDisplay(taskEditWindow.divs.componentTaskSearch, false);
			dataBase.defaultTask.components.push(dataBase.content[taskIndex].id);
		}
	}

	taskEditWindow.divs.dependancyTaskSearch.onclick = ()=> {
		const taskIndex = getListIndex(taskEditWindow.divs.dependancyTaskSearch);
		if (taskIndex >= 0) {
			divDisplay(taskEditWindow.divs.dependancyTaskSearch, false);
			dataBase.defaultTask.dependancies.push(dataBase.content[taskIndex].id);
		}
	}


	taskEditWindow.buttons.saveEdit.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
		saveEdit(currentTaskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase, currentTaskId);	
	}
	taskEditWindow.buttons.cancelEdit.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
	}
	taskEditWindow.buttons.deleteTask.onclick = ()=> {
		divDisplay(taskEditWindow.divs.main, false);
		deleteTask(currentTaskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase, currentTaskId);
	}
}