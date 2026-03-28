export function displayTaskList(list: Task[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i].title + '</button>';
		}
	id.innerHTML = listHTML;
}

export function displayPersonList(list: string[], id: HTMLElement): void {
	let listHTML = '';
		for (let i = 0; i < list.length; i++) {
			listHTML += '<button>' + list[i] + '</button>';
		}
	id.innerHTML = listHTML;
}