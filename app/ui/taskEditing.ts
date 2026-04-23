import { dateStringToNumber, numberToDateString } from 'app/date';
import { taskEditWindow } from 'app/ui/htmlElements';

export function insertTaskValue(task: Task): void {

	const tewi = taskEditWindow.inputs;
	// const tewd = taskEditWindow.divs;

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
		tewi.start.value = String(numberToDateString(schedule.start));
		tewi.due.value = String(numberToDateString(schedule.due));
		tewi.duration.value = String(schedule.duration);
		if (schedule.repeating) {
			const repeating = schedule.repeating;
			tewi.isRepeating.checked = true;
			tewi.repeatFreq.value = String(repeating.repeatFreq);
			tewi.repeatStart.value = String(repeating.repeatStart);
			if (repeating.repeatEnd) {
				tewi.isRepeatEnd.checked = true;
				tewi.repeatEnd.value = String(repeating.repeatEnd);
			}
		}

	}
	tewi.priority.value = String(task.priority);
	tewi.description.value = task.description;
	// displayTaskList(task.dependancies, tewd.dependancyList);
	// displayTaskList(task.components, tewd.componentList);
	// displayPersonList(task.subjects, tewd.subjectList);
	// displayPersonList(task.owner, tewd.ownerList);
}

export function getTaskValue(task: Task): Task {

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
				repeatFreq: dateStringToNumber(tewi.repeatFreq.value),
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

	return task;
}
