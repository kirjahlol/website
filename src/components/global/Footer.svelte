<script lang="ts">
	import { version } from '$app/environment';

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
			<a {href} rel="external" target="_blank">{content}</a>
		{:else}
			{content}
		{/if}
		<span class="text-[0.5rem] last-of-type:hidden">&bull;</span>
	{/each}
</footer>
