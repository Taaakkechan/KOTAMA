export function getTimeStamp(date: string) {
	//returns timestamp down to the minute
	return Date.parse(date) / (1000 * 60);
}

