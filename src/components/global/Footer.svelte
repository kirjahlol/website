<script lang="ts">
	import { version } from '$app/environment';
	import Icon from '@iconify/svelte';

	interface Item {
		href?: string;
		content: string;
	}

	const items: Item[] = [
		{
			content: `© ${new Date().getFullYear()} kirjah`
		},
		{
			href: 'https://github.com/kirjahlol/website',
			content: 'Source code'
		},
		{
			href: `https://github.com/kirjahlol/website/commit/${version}`,
			content: version
		}
	];
</script>

<footer class="flex items-center gap-2">
	{#each items as { href, content }, i (i)}
		{#if href}
			<a {href} rel="external">{content}</a>
		{:else}
			{content}
		{/if}
		<Icon icon="tabler:point-filled" class="size-2 last-of-type:hidden" />
	{/each}
</footer>
