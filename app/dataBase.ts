import { initTask, removeComponent, removeDependancy } from 'app/task';

let dataBase: DataBase;

function initializeDataBase(): DataBase {
	const defaultDataBase: DataBase = {
		tasks: [],
		taskTemplates: [],
		subjects: [],
		nextId: 1
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

export function getDataBase(): DataBase {
	return dataBase;
}

export function getTaskById(id: number): Task {
	if (id === 0) {
		return initTask();
	} 
	for (let i = 0; i < dataBase.tasks.length; i++) {
		if (id === dataBase.tasks[i].id) {
			return dataBase.tasks[i];
		}
	}
	throw new Error('task not found');
}

function getTaskIndex(id: number): number {
	if (id <= 0 || id >= dataBase.nextId) {
		throw new Error('invalid id');
	} 
	for (let i = 1; i < dataBase.tasks.length; i++) {
		if (id === dataBase.tasks[i].id) {
			return i;
		}
	}
	throw new Error('task not found');
}

function isTaskExist(id: number): boolean {
	for (let i = 0; i < dataBase.tasks.length; i++) {
		if (id === dataBase.tasks[i].id) {
			return true;
		}
	}
	return false;
}
export function removeTask(id: number): void {
	if (isTaskExist(id)) {
		const tasks = dataBase.tasks;
		const index = getTaskIndex(id);
		dataBase.tasks.splice(index, 1);
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].components.length > 0) {
				removeComponent(tasks[i], id);
			}
			if (tasks[i].dependancies.length > 0) {
				removeDependancy(tasks[i], id);
			}
		}
		saveData();
	} else {throw new Error('task not found');}
}

export function insertTask(task: Task): void {
	if (task.id === dataBase.nextId) {
		dataBase.tasks.push(task);
		dataBase.nextId++;

	} else if (task.id < dataBase.nextId) {
		if (isTaskExist(task.id)) {
			const index = getTaskIndex(task.id);
			dataBase.tasks.splice(index, 1, task);
			saveData();
		} else {throw new Error('task not found');}
	} else {throw new Error('invalid id');}
}


export function saveData(): void {
	localStorage.setItem("savedData", JSON.stringify(dataBase));	
}