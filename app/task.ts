export function getTotalDuration(task: Task): number {
	if (task.components) {
		let duration = 0;
		for (let i = 0; i < task.components.length; i++) {
			if (task.components[i].duration) {
				duration += task.components[i].duration!;
			} else {throw new Error('duration undefined');}
		}
		return duration;
	} else {throw new Error('components undefined');} 
}
