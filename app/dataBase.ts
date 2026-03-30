import { initTask, getTaskValue } from 'app/task';

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

export function getListIndex(list: HTMLElement): number {
	let Index = [...list.children].indexOf(event?.target as Element);
	// schinanigins
	return (Index - 1) / 2;
}

export function saveTask(currentTaskId: number, dataBase: DataBase): void {
	const task = getTaskValue(getTaskById(currentTaskId, dataBase));
	if (currentTaskId === 0) {
		task.id = dataBase.nextId;
		dataBase.nextId++;
		dataBase.content.push(task);
	} else {
		dataBase.content[getTaskIndexById(currentTaskId, dataBase)] = task;
	}
}

export function deleteTask(currentTaskId: number, dataBase: DataBase): void {
	if (currentTaskId > 0) {
		dataBase.content.splice(getTaskIndexById(currentTaskId, dataBase), 1);
	}
}

export function saveData(data: DataBase) {
	localStorage.setItem("savedData", JSON.stringify(data));	
}