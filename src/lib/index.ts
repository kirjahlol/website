import type { Attachment } from 'svelte/attachments';
import tippy, { type Placement } from 'tippy.js';

export interface Status {
	content: string;
	face: string;
	timeAgo: string;
}

export function getAge(birthday: Date, digits: number = 0): number {
	const currentDate = new Date();

	const diffInMs = currentDate.getTime() - birthday.getTime();
	const msInYear = 365.25 * 24 * 60 * 60 * 1000;

	return Number((diffInMs / msInYear).toFixed(digits));
}

export function tooltip(content: string, placement: Placement): Attachment {
	return (node) => {
		const tooltip = tippy(node, {
			content,
			placement,
			allowHTML: true,
			animation: 'shift-away-subtle',
			theme: 'ctp-green'
		});
		return tooltip.destroy;
	};
}

export const dateOfBirth = '2010-03-29T00:00:00.000Z';
export const age = getAge(new Date(dateOfBirth));

export const pronouns = 'he/she/it';

export const location = 'United States';
