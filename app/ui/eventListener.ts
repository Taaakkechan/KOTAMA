import { defaultStaticEvents } from 'app/ui/buttonEvents/defaultEvents';
import { taskEditingStaticEvents } from 'app/ui/buttonEvents/taskEditingEvents';

export function eventListeners() {
	taskEditingStaticEvents();
	defaultStaticEvents();
}