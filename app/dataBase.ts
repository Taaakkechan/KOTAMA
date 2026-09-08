import { initTask } from 'app/task';

export let dataBase: DataBase;

function initializeDataBase(): DataBase {
	const defaultDataBase: DataBase = {
		tasks: [],
		nextTaskID: 1,
		nextOccurrenceID: 1
	}
	return defaultDataBase;
}

export function loadDataBase(): void {
	dataBase = initializeDataBase();
	const savedData = localStorage.getItem("savedData");
	if (savedData) {
		dataBase = JSON.parse(savedData);
		console.log("data loaded");
	} else {
		console.log("initiated data");
	}
}

export function clearSavedData(): void {
	localStorage.removeItem("savedData");
}


// same with dataBase with state
// export function getDataBase(): DataBase {
// 	return dataBase;
// }

export function getTaskById(id: number): Task {
	if (id === 0) {
		return initTask();
	} 
	for (const task of dataBase.tasks) {
		if (id === task.id) {
			return task;
		}
	}
	throw new Error('task not found');
}

function getTaskIndex(id: number): number {
	if (id <= 0 || id >= dataBase.nextTaskID) {
		throw new Error('invalid id');
	} 
	for (let i = 0; i < dataBase.tasks.length; i++) {
		if (id === dataBase.tasks[i].id) {
			return i;
		}
	}
	throw new Error('task not found');
}

function isTaskExist(id: number): boolean {
	for (const task of dataBase.tasks) {
		if (id === task.id) {
			return true;
		}
	}
	return false;
}

export function removeTask(id: number): void {
	if (isTaskExist(id)) {
		const index = getTaskIndex(id);
		dataBase.tasks.splice(index, 1);
		saveData();
	} else {throw new Error('task not found');}
}

export function generateOccurenceID(taskID: number, uniqueNumber: number): string {
	const newID = String(taskID) + 'T' + String(uniqueNumber);
	return newID;
}

export function getbaseTaskID(id: string): number {
	let TaskID = '';
	for (let i = 0; id[i] != 'T'; i++) {
		TaskID += id[i];
	}
	return Number(TaskID);
}

export function getTaskByOccurrenceID(id: string): Task {
	return getTaskById(getBaseTaskID(id));
}

export function getOccurrenceByID(id: string): Occurrence {
	const baseTask = getTaskByOccurrenceID(id);
	for (const occurrence of baseTask.occurrences) {
		if (occurrence.id === id) {
			return occurrence;
		}
	if (baseTask.completed) {
		for (const occurrence of baseTask.completed) {
			if (occurrence.id === id) {
				return occurrence;
			}
		}
	} throw new Error('Occurrence Not Found');
}

function changeAllOccurrence()



export function insertTask(task: Task): void {
 	if (task.id < dataBase.nextTaskID) {
		if (isTaskExist(task.id)) {

			const index = getTaskIndex(task.id);

			// replace with the new task
			dataBase.tasks.splice(index, 1, task);
			saveData();
		} else {throw new Error('task not found');}
	} else {throw new Error('invalid id');}
}

export function saveData(): void {
	localStorage.setItem("savedData", JSON.stringify(dataBase));	
}