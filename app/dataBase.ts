import { initTask } from 'app/task';

export function getTaskById(id: number, taskDB: DataBase): Task {
	if (id === 0) {
		return initTask();
	} 
	for (let i = 0; i < taskDB.content.length; i++) {
		if (id === taskDB.content[i].id) {
			return taskDB.content[i];
		}
	}
	throw new Error('task not found');
}

export function getTaskComponents(task: Task, dataBase: DataBase): Task[] {
	const components = task.components
	let taskList = [] as Task[]
	for (let i = 0; i < components.length; i++) {
		taskList.push(getTaskById(components[i], dataBase)); 
	}
	return taskList;
}

export function getTaskDependancies(task: Task, dataBase: DataBase): Task[] {
	const dependancies = task.dependancies
	let taskList = [] as Task[]
	for (let i = 0; i < dependancies.length; i++) {
		taskList.push(getTaskById(dependancies[i], dataBase)); 
	}
	return taskList;
}

export function getTaskIndexById(id: number, taskDB: DataBase): number {
	if (id <= 0 || id >= taskDB.nextId) {
		throw new Error('invalid id');
	} 
	for (let i = 0; i < taskDB.content.length; i++) {
		if (id === taskDB.content[i].id) {
			return i;
		}
	}
	throw new Error('task not found');
}

export function saveData(data: DataBase) {
	localStorage.setItem("savedData", JSON.stringify(data));	
}