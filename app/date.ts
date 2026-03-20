// store everything in terms of minutes

export function getUTCTimeStamp(localTime: string): number {
	return Date.parse(localTime) / (1000 * 60);
}

export function getCurrentUTCTime(): number {
	return Math.floor(Date.now()/ (1000 * 60));
}

export function getLocalTime(timeStamp: number): string {
	const date = new Date(timeStamp * 1000 * 60);
	return date.toString();
}	

// need to store local date input as UTC timeStam
// need to display UTC timeStamp as local date