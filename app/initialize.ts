import { loadDataBase } from 'app/dataBase';
import { initializeState } from 'app/currentState';
import { initializeSchedule } from 'app/schedule';
import { updateAllListUi } from 'app/ui/taskBlock';

export function initializeProgram(): void {
	loadDataBase();
	initializeState();
	initializeSchedule();
	updateAllListUi();
}