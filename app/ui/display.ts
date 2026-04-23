import { taskEditWindow } from 'app/ui/htmlElements';

export function divDisplay(element: HTMLElement, display: boolean): void {
	if (display) {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
	
}

export function updateTaskEditWindowDisplay(): void {

	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	// fix so we change value of container instead of input itself
	if (tewi.isEvent.checked) {
		tewi.isDone.style.display = 'none';
	} else {
		tewi.isDone.style.display = 'block';
	}

	if (tewi.isSchedule.checked) {
		tewd.schedule.style.display = 'block';

		if (tewi.isRepeating.checked) {
			tewd.repeat.style.display = 'block';

			if (tewi.isRepeatEnd.checked) {
				tewi.repeatEnd.style.display = 'block';
			} else {
				tewi.repeatEnd.style.display = 'none';
			}
		} else {
			tewd.repeat.style.display = 'none';
		}
	} else {
		tewd.schedule.style.display = 'none';
	}
}

