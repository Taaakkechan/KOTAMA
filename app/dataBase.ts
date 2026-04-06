import { initTask } from 'app/task';

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

export function loadDataBase(): DataBase {
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

export function getTaskComponents(task: Task): Task[] {
	const components = task.components
	let taskList = [] as Task[]
	for (let i = 0; i < components.length; i++) {
		taskList.push(getTaskById(components[i])); 
	}
	return taskList;
}

export function getTaskDependancies(task: Task): Task[] {
	const dependancies = task.dependancies
	let taskList = [] as Task[]
	for (let i = 0; i < dependancies.length; i++) {
		taskList.push(getTaskById(dependancies[i])); 
	}
	return taskList;
}

export function getTaskIndexById(id: number): number {
	if (id <= 0 || id >= dataBase.nextId) {
		throw new Error('invalid id');
	} 
	for (let i = 0; i < dataBase.tasks.length; i++) {
		if (id === dataBase.tasks[i].id) {
			return i;
		}
	}
	throw new Error('task not found');
}

export function saveData(): void {
	localStorage.setItem("savedData", JSON.stringify(dataBase));	
}