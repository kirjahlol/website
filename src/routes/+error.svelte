<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Footer from '$components/layout/Footer.svelte';
	import './(app)/layout.css';
	import Icon from '@iconify/svelte';

	if (browser) {
		const isThemeSystem = localStorage.getItem('theme-system');
		if (isThemeSystem === null) {
			const isThemeDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = isThemeDarkPreferred ? 'mocha' : 'latte';
			localStorage.setItem('theme', defaultTheme);
			localStorage.setItem('theme-system', 'true');
		}

		const theme = localStorage.getItem('theme');
		if (theme) {
			document.documentElement.className = theme;
		}
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-4">
	{#if page.status === 404}
		<h1 class="font-mono text-5xl font-semibold">404</h1>
		<p class="mb-2 text-lg">The page you're looking for doesn't exist. Sorry!</p>
	{:else if page.status === 500}
		<h1 class="font-mono text-5xl font-semibold">500</h1>
		<p class="mb-2 text-lg">The website messed something up. Sorry!</p>
	{:else}
		<h1 class="font-mono text-5xl font-semibold">{page.status}</h1>
		<p class="mb-2 text-lg">{page.error?.message}</p>
	{/if}
	<a
		href={resolve('/')}
		class="flex items-center gap-2 rounded-lg bg-ctp-green p-2 text-ctp-base"
		><Icon icon="tabler:arrow-left" class="size-6" /> Back to home</a
	>
</div>
<Footer />
