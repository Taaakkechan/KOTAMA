import { dateStringToNumber, numberToDateTimeString, numberToDateString, getCurrentTime } from 'app/date';
import { taskEditWindow } from 'app/ui/htmlElements';
import { updateSearchListUi, removeAllTaskBlock } from 'app/ui/taskBlock';
import { editingComponentOnclick, editingDependancyOnclick } from 'app/ui/buttonEvents/taskEditingEvents';
import { getTaskDependancies, getTaskComponents } from 'app/task';

function defaultTaskEditWindow(): void {

	const now = getCurrentTime();
	const tewi = taskEditWindow.inputs;

	tewi.isDone.checked = false;
	tewi.title.value = '';
	tewi.isSchedule.checked = true;
	tewi.start.value = numberToDateTimeString(now + 60 - (now % 60));
	tewi.due.value = numberToDateTimeString(now + 120 - (now % 60));
	tewi.duration.value = '60'
	tewi.isRepeating.checked = false;
	tewi.repeatFreq.value = '7';
	tewi.repeatStart.value = numberToDateString(now - (now % 1440));
	tewi.isRepeatEnd.checked = false;
	tewi.repeatEnd.value = numberToDateString(now - (now % 1440) + (1440 * 30));
}

export function populateEditWindow(task: Task): void {

	defaultTaskEditWindow();

	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	if (task.completed != null) {
			tewi.isDone.checked = task.completed;
	} else {
		tewi.isEvent.checked = true;
	}

	tewi.title.value = task.title;
	if (task.status === 'pending') {
		tewi.isPending.checked = true;
	} else if (task.status === 'none') {
		tewi.isNone.checked = true;
	} else if (task.scheduling) {
		const schedule = task.scheduling;
		tewi.isSchedule.checked = true;
		tewi.start.value = numberToDateTimeString(schedule.start);
		tewi.due.value = numberToDateTimeString(schedule.due);
		tewi.duration.value = String(schedule.duration);
		if (schedule.repeating) {
			const rep = schedule.repeating;
			tewi.isRepeating.checked = true;
			tewi.repeatFreq.value = String(rep.freq / 1440);
			tewi.repeatStart.value = numberToDateString(rep.start);
			if (rep.end) {
				tewi.isRepeatEnd.checked = true;
				tewi.repeatEnd.value = numberToDateString(rep.end);
			}
		}

	}
	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
	updateSearchListUi(tewd.componentList, getTaskComponents(task), editingComponentOnclick);
	updateSearchListUi(tewd.dependancyList, getTaskDependancies(task), editingDependancyOnclick);
}

export function retrieveValue(task: Task): Task {
	const tewi = taskEditWindow.inputs
	task.completed = undefined
	task.title = tewi.title.value

	if (!tewi.isEvent.checked) {
		task.completed = tewi.isDone.checked
	}

	if (tewi.isPending.checked) {
		task.status = 'pending';
	} else if (tewi.isNone.checked) {
		task.status = 'none';
	} else {
		let repeat = undefined;
		if (tewi.isRepeating.checked) {
			let repeatEnd = undefined;
			let exceptionIn = [] as ScheduledTask[];
			let exceptionOut = [] as ScheduledTask[];
			if (tewi.isRepeatEnd.checked) {
				repeatEnd = dateStringToNumber(tewi.repeatEnd.value);
			}
			if (task.scheduling) {
				if (task.scheduling.repeating) {
					exceptionIn = task.scheduling.repeating.exceptionIn;
					exceptionOut = task.scheduling.repeating.exceptionIn;
				}
			}
			repeat = {
				freq: Number(tewi.repeatFreq.value) * 1440,
				start: dateStringToNumber(tewi.repeatStart.value),
				end: repeatEnd,
				exceptionIn: exceptionIn,
				exceptionOut: exceptionOut,
			}
		}
		task.scheduling = {
			start: dateStringToNumber(tewi.start.value),
			due: dateStringToNumber(tewi.due.value),
			duration: Number(tewi.duration.value),
			repeating: repeat
		}
	}
	task.priority = Number(tewi.priority.value);
	task.description = tewi.description.value;
	console.log(task);
	return task;
}

export function resetTaskEditWindow(): void {
	const tewd = taskEditWindow.divs
	removeAllTaskBlock(tewd.componentList);
	removeAllTaskBlock(tewd.dependancyList);
}
