import { dateStringToNumber, numberToDateTimeString, numberToDateString } from 'app/date';
import { taskEditWindow } from 'app/ui/htmlElements';
import { updateHtmlLists, removeAllTaskBlock } from 'app/ui/taskList';
import { editingComponentOnclick, editingDependancyOnclick } from 'app/ui/buttonEvents/taskEditingEvents';
import { getTaskDependancies, getTaskComponents } from 'app/task';

export function populateEditWindow(task: Task): void {

	const tewi = taskEditWindow.inputs;
	const tewd = taskEditWindow.divs;

	if (task.completed != null) {
			tewi.isDone.checked = task.completed;
	} else {
		tewi.isEvent.checked = true;
	}

	tewi.title.value = task.title;
	if (task.scheduling === 'pending') {
		tewi.isPending.checked = true;
	} else if (task.scheduling === 'none') {
		tewi.isNone.checked = true;
	} else {
		const schedule = task.scheduling ;
		tewi.isSchedule.checked = true;
		tewi.start.value = numberToDateTimeString(schedule.start);
		tewi.due.value = numberToDateTimeString(schedule.due);
		tewi.duration.value = String(schedule.duration);
		if (schedule.repeating) {
			const repeating = schedule.repeating;
			tewi.isRepeating.checked = true;
			tewi.repeatFreq.value = String(repeating.repeatFreq);
			tewi.repeatStart.value = numberToDateString(repeating.repeatStart);
			if (repeating.repeatEnd) {
				tewi.isRepeatEnd.checked = true;
				tewi.repeatEnd.value = numberToDateString(repeating.repeatEnd);
			}
		}

	}
	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
	updateHtmlLists(getTaskComponents(task), tewd.componentList, 'taskBlock', editingComponentOnclick);
	updateHtmlLists(getTaskDependancies(task), tewd.dependancyList, 'taskBlock', editingDependancyOnclick);
}

export function retrieveValue(task: Task): Task {
	const tewi = taskEditWindow.inputs
	task.completed = undefined
	task.title = tewi.title.value

	if (!tewi.isEvent.checked) {
		task.completed = tewi.isDone.checked
	}

	if (tewi.isPending.checked) {
		task.scheduling = 'pending';
	} else if (tewi.isNone.checked) {
		task.scheduling = 'none';
	} else {
		let repeat = undefined;
		if (tewi.isRepeating.checked) {
			let repeatEnd = undefined;
			let exceptionIn = [] as ScheduledTask[];
			let exceptionOut = [] as ScheduledTask[];
			if (tewi.isRepeatEnd.checked) {
				repeatEnd = dateStringToNumber(tewi.repeatEnd.value);
			}
			if (task.scheduling != 'pending' && task.scheduling != 'none') {
				if (task.scheduling.repeating) {
					exceptionIn = task.scheduling.repeating.exceptionIn;
					exceptionOut = task.scheduling.repeating.exceptionIn;
				}
			}
			repeat = {
				repeatFreq: Number(tewi.repeatFreq.value),
				repeatStart: dateStringToNumber(tewi.repeatStart.value),
				repeatEnd: repeatEnd,
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
