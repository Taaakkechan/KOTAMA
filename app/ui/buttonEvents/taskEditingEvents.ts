import { currentState } from 'app/currentState';
import { initTask } from 'app/task';
import { divDisplay } from 'app/ui/display';
import { taskEditWindow } from 'app/ui/htmlElements';
import { removeTask, insertTask } from 'app/dataBase';
import { retrieveValue, resetTaskEditWindow } from 'app/ui/taskEditing';
import { update } from 'app/update';

const tewb = taskEditWindow.buttons;

export function taskEditingStaticEvents(): void {
	// just directly assigns the function to the HTMLButtonElements

	// save edit
	tewb.saveEdit.addEventListener('click', function () {

		divDisplay(taskEditWindow.divs.main, false);

		// sets the currentState to the edited tasks
		retrieveValue(currentState.tempTask);

		// check if it is a new task or not
		if (currentState.tempTask.id === dataBase.nextTaskID) {
			dataBase.tasks.push(task);
			dataBase.nextTaskID++;
			saveData();
			initializeState();
			update();
			resetTaskEditWindow();
		} else {
			// detect whether schedule has been changed
			
			// if schedule changed >>> show form (1. change all 2. change this only 3. change from now on)
		}
	});

	// change all occurences Button

	// change this instance Button

	// change this all occurrences from now on. Button

	// cancel edit
	tewb.cancelEdit.addEventListener('click', function () {
		divDisplay(taskEditWindow.divs.main, false);
		currentState.tempTask = initTask();
		resetTaskEditWindow();
	});

	// delete task
	tewb.deleteTask.addEventListener('click', function () {
		divDisplay(taskEditWindow.divs.main, false);
		removeTask(currentState.tempTask.id);
		currentState.tempTask = initTask();
		update();
		resetTaskEditWindow();
	});
}