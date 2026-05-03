<script lang="ts">
	import { version } from '$app/environment';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	interface Item {
		href?: string;
		content: string;
	}

	const items: Item[] = [
		{
			content: `&copy; ${new Date().getFullYear()} kirjah`
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

<footer class="flex w-screen items-center justify-between bg-ctp-mantle p-4">
	<ThemeSwitcher />
	<div class="flex flex-col items-center sm:flex-row sm:gap-2">
		{#each items as { href, content }, i (i)}
			{#if href}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<a {href} rel="external" target="_blank">{@html content}</a>
			{:else}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html content}
			{/if}
			<span class="hidden text-[0.5rem] last-of-type:hidden sm:inline">&bull;</span>
		{/each}
	</div>
</footer>
