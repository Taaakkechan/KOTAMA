import { updateTaskEditWindowDisplay } from 'app/ui/display';
import { updateAllListUi } from 'app/ui/taskBlock';

export function update(): void {
	updateAllListUi();
	updateTaskEditWindowDisplay();
}
