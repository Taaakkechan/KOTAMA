// store things in terms of YYYY-MM-DDTHH:MM I guess?
// probably not supporting time zones. Only care about what time the user is living in
// so I need to define getting the current time (of user), and then converting string to number and number to string
// when getting time for the user, should I define both string and number, or just number?
function getTimeOffset(): number {
	const date = new Date(Date.now());
	return date.getTimezoneOffset();
}

export function getCurrentTime(): number {
	return Math.floor(Date.now()/ (1000 * 60)) - getTimeOffset();
}

export function numberToDateString(timeStamp: number): string {
	const date = new Date(timeStamp * 1000 * 60);
	return date.toISOString().slice(0, -8);
}	

export function dateStringToNumber(dateTime: string): number {
	const date = new Date();
	return Date.parse(dateTime) / (1000 * 60) - getTimeOffset();
}


