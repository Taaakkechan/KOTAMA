interface scheduleItem {
	due: number
	start?: number
}

interface repeatingItem extends scheduleItem{
	repeatFreq: number[]
	repeatStart: number
	repeatEnd?: number
}

type scheduling = scheduleItem | repeatItem | 'pending' | 'none';

interface Task {
	title: string
	description: string
	subjects: string[]
	priority: number
	owner: string

	scheduling: scheduling

	duration?: number

	dependancy?: Task
	components?: Task[]

}

interface ScheduledTask {
	title: string
	description: string
	subjects: string[]	//Subject[]
	priority: number
	owner: string

	//create date interface
	start?: number
	due: number
	duration: number

	dependancy?: Task
	originalTask: Task
}