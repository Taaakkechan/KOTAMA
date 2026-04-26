import { scheduleTasks } from 'app/schedule';
import { saveData } from 'app/dataBase';

export function update(): void {
	saveData();
	// parameter is schedule window in days.
	scheduleTasks(-30, 30);
}	