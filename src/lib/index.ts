import type { Attachment } from 'svelte/attachments';
import tippy, { type Placement } from 'tippy.js';

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
