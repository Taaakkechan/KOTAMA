import { dateStringToNumber, numberToDateTimeString, numberToDateString, getCurrentTime } from 'app/date';
import { taskEditWindow } from 'app/ui/htmlElements';
import { updateSearchListUi, removeAllTaskBlock } from 'app/ui/taskBlock';
import { editingComponentOnclick, editingDependancyOnclick } from 'app/ui/buttonEvents/taskEditingEvents';
import { getTaskByOccurrenceID } from 'app/task';

function defaultTaskEditWindow(): void {

	const now = getCurrentTime();
	const tewi = taskEditWindow.inputs;

	tewi.isDone.checked = false;
	tewi.title.value = '';
	tewi.start.value = numberToDateTimeString(now + 60 - (now % 60));
	tewi.due.value = numberToDateTimeString(now + 120 - (now % 60));
	tewi.duration.value = '60'
	tewi.isRepeating.checked = false;
	tewi.repeatFreq.value = '7';
	tewi.repeatStart.value = numberToDateString(now - (now % 1440));
	tewi.isRepeatEnd.checked = false;
	tewi.repeatEnd.value = numberToDateString(now - (now % 1440) + (1440 * 30));
}
export function resetTaskEditWindow(): void {
	defaultTaskEditWindow();
}

export function populateEditWindow(instance: TaskInstance): void {

	resetTaskEditWindow();
	const id = instance.occurrenceID;
	const task = getTaskByOccurrenceID(id);
	const occurrence = getOccurrenceByID(id);
	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	if (task.completed != null) {
			tewi.isDone.checked = task.completed;
	} else {
		tewi.isEvent.checked = true;
	}

	tewi.title.value = task.title;
	tewi.duration.value = String(task.duration);

	tewi.start.value = numberToDateTimeString(instance.start);
	tewi.due.value = numberToDateTimeString(instance.due);
	if (occurrence.repeating) {
		const rep = occurrence.repeating;
		tewi.isRepeating.checked = true;
		tewi.repeatFreq.value = String(rep.freq / 1440);
		if (rep.end) {
			tewi.isRepeatEnd.checked = true;
			tewi.repeatEnd.value = numberToDateString(rep.end);
		}
	}

	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
}

export function retrieveValue(task: Task): Task {
	const tewi = taskEditWindow.inputs
	task.completed = undefined
	task.title = tewi.title.value
	duration: Number(tewi.duration.value),
	if (!tewi.isEvent.checked) {
		markInstance(tewi.isDone.checked);
	}

	let repeat = undefined;
	if (tewi.isRepeating.checked) {
		let repeatEnd = undefined;
		if (tewi.isRepeatEnd.checked) {
			repeatEnd = dateStringToNumber(tewi.repeatEnd.value);
		}
		repeat = {
			freq: Number(tewi.repeatFreq.value) * 1440,
			end: repeatEnd,
		}
	}

	//TODO: fix program so it supports multiple occurrences
	const instance = {
		id: '0T0',
		start: dateStringToNumber(tewi.start.value),
		due: dateStringToNumber(tewi.due.value),
		repeating: repeat
	}
	task.occurrences = [instance];
	task.priority = Number(tewi.priority.value);
	task.description = tewi.description.value;
	console.log(task);
	return task;
}


