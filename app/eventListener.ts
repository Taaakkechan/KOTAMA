import { getListIndex, saveTask, deleteTask, saveData } from 'app/dataBase';
import { initTask, insertTaskValue } from 'app/task';
import { taskEditWindowDisplay, updateLists } from 'app/display';
import { taskEditWindow, taskDBList, createNewTask } from 'app/htmlElements';

export function eventListener(currentTaskId: number, dataBase: DataBase) {
	createNewTask.onclick = ()=> {
		const newTask = initTask();
		currentTaskId = newTask.id;
		insertTaskValue(newTask);
		taskEditWindowDisplay(true);
	}

	taskDBList.onclick = ()=> {
		const taskIndex = getListIndex(taskDBList);
		currentTaskId = dataBase.content[taskIndex].id;
		
		insertTaskValue(dataBase.content[taskIndex]);
		taskEditWindowDisplay(true);
	}

	taskEditWindow.buttons.save.onclick = ()=> {
		taskEditWindowDisplay(false);
		saveTask(currentTaskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase);	
	}
	taskEditWindow.buttons.cancel.onclick = ()=> {
		taskEditWindowDisplay(false);
	}
	taskEditWindow.buttons.delete.onclick = ()=> {
		taskEditWindowDisplay(false);
		deleteTask(currentTaskId, dataBase);
		saveData(dataBase);
		updateLists(dataBase);
	}
}