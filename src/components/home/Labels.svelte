<script lang="ts">
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';

	export interface Label {
		id: number;
		name: string;
		icon: string;
		content: string;
	}

	let { labels }: { labels: Label[] } = $props();
</script>

<div class="flex flex-wrap gap-2">
	{#each labels as { id, name, icon, content } (id)}
		<div
			class="flex items-center gap-2 rounded-md bg-ctp-green/25 p-2 text-ctp-green"
			{@attach tooltip(name, 'bottom')}
		>
			<Icon {icon} class="size-6" />
			{content}
		</div>
	{/each}
</div>
