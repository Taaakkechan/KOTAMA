import { taskEditWindow, taskDBList } from 'app/htmlElements';

export function displayTaskList(list: Task[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
		let title = list[i].title
			if (title === '') {
				title = '(no title)';
			}
			listHTML += '<br><button>' + title + '</button>';
		}
	id.innerHTML = listHTML;
}

export function displayPersonList(list: string[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i] + '</button>';
		}
	id.innerHTML = listHTML;
}

export function taskEditWindowDisplay(display: boolean): void {
	if (display) {
		taskEditWindow.divs.main.style.display = 'block';
	} else {
		taskEditWindow.divs.main.style.display = 'none';
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

export function updateLists(dataBase: DataBase): void {
	displayTaskList(dataBase.content, taskDBList);
}