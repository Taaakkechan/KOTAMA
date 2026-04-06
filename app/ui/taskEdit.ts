import { getTaskIndexById } from 'app/dataBase';
import { initTask } from 'app/task';
import { dateStringToNumber, numberToDateString } from 'app/date';
import { taskEditWindow } from 'app/ui/htmlElements';



export function insertTaskValue(task: Task): void {

	const tewi = taskEditWindow.inputs;
	// const tewd = taskEditWindow.divs;

	if (task.completed != null) {
			tewi.isDone.checked = task.completed;
	} else {
		tewi.isEvent.checked = true;
	}

	tewi.title.value = task.title;
	if (task.scheduling === 'pending') {
		tewi.isPending.checked = true;
	} else if (task.scheduling === 'none') {
		tewi.isNone.checked = true;
	} else {
		const schedule = task.scheduling ;
		tewi.isSchedule.checked = true;
		tewi.start.value = String(numberToDateString(schedule.start));
		tewi.due.value = String(numberToDateString(schedule.due));
		tewi.duration.value = String(schedule.duration);
		if (schedule.repeating) {
			const repeating = schedule.repeating;
			tewi.isRepeating.checked = true;
			tewi.repeatFreq.value = String(repeating.repeatFreq);
			tewi.repeatStart.value = String(repeating.repeatStart);
			if (repeating.repeatEnd) {
				tewi.isRepeatEnd.checked = true;
				tewi.repeatEnd.value = String(repeating.repeatEnd);
			}
		}

	}
	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
	// displayTaskList(task.dependancies, tewd.dependancyList);
	// displayTaskList(task.components, tewd.componentList);
	// displayPersonList(task.subjects, tewd.subjectList);
	// displayPersonList(task.owner, tewd.ownerList);
}

export function getTaskValue(task: Task): Task {

	const tewi = taskEditWindow.inputs
	task.completed = undefined
	task.title = tewi.title.value

	if (!tewi.isEvent.checked) {
		task.completed = tewi.isDone.checked
	}

	if (tewi.isPending.checked) {
		task.scheduling = 'pending';
	} else if (tewi.isNone.checked) {
		task.scheduling = 'none';
	} else {
		let repeat = undefined;
		if (tewi.isRepeating.checked) {
			let repeatEnd = undefined;
			let exceptionIn = [] as ScheduledTask[];
			let exceptionOut = [] as ScheduledTask[];
			if (tewi.isRepeatEnd.checked) {
				repeatEnd = dateStringToNumber(tewi.repeatEnd.value);
			}
			if (task.scheduling != 'pending' && task.scheduling != 'none') {
				if (task.scheduling.repeating) {
					exceptionIn = task.scheduling.repeating.exceptionIn;
					exceptionOut = task.scheduling.repeating.exceptionIn;
				}
			}
			repeat = {
				repeatFreq: dateStringToNumber(tewi.repeatFreq.value),
				repeatStart: dateStringToNumber(tewi.repeatStart.value),
				repeatEnd: repeatEnd,
				exceptionIn: exceptionIn,
				exceptionOut: exceptionOut,
			}
		}
		task.scheduling = {
			start: dateStringToNumber(tewi.start.value),
			due: dateStringToNumber(tewi.due.value),
			duration: Number(tewi.duration.value),
			repeating: repeat
		}
	}
	task.priority = Number(tewi.priority.value);
	task.description = tewi.description.value;

	return task;
}

// function resetTaskEditWindow(dataBase: DataBase, currentState: CurrentState): void {
// 	currentState.tempTask = initTask();
// 	curretState.taskId = 0;
// }

export function saveEdit(currentTaskId: number, dataBase: DataBase): void {
	const editedTask = currentState.tempTask;
	editedTask.id = currentTaskId;
	if (currentTaskId === dataBase.nextId) {
		dataBase.tasks.push(editedTask);
		dataBase.nextId++;
	} else {
		dataBase.tasks[getTaskIndexById(currentTaskId, dataBase)] = editedTask;
	}
	currentState.tempTask = initTask();
}

export function cancelEdit(dataBase: DataBase): void {
	currentState.tempTask = initTask();
}

export function deleteTask(id: number, dataBase: DataBase): void {
	const task = getTaskIndexById(id, dataBase);
	const tasks = dataBase.tasks;
	if (id > 0) {
		tasks.splice(task, 1);
		console.log('task deleted. id: ' + id);
		console.log('task deleted. name: ' + id);
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].components.length > 0) {
				console.log('finding deleted task');
				for (let j = 0; j < tasks[i].components.length; j++) {
					console.log('checking compoents');
					if (id === tasks[i].components[j]) {
						tasks[i].components.splice(j, 1);
						console.log(tasks[i]);
						console.log('component deleted');
					}
				}
				for (let j = 0; j < tasks[i].dependancies.length; j++) {
					console.log('checking compoents');
					if (id === tasks[i].dependancies[j]) {
						tasks[i].dependancies.splice(j, 1);
						console.log(tasks[i]);
						console.log('dependancy deleted');
					}
				}
			}
		}
	}
	currentState.tempTask = initTask();
}
