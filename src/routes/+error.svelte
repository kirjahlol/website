<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Footer from '$components/global/Footer.svelte';
	import './(app)/layout.css';

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
		<h1 class="font-mono text-7xl font-semibold">404</h1>
		<p class="mb-2 text-center text-xl/8 font-medium">
			The page you're looking for doesn't exist. Sorry!
		</p>
	{:else if page.status === 500}
		<h1 class="font-mono text-7xl font-semibold">500</h1>
		<p class="mb-2 text-xl/8 font-medium">The website messed something up. Sorry!</p>
	{:else}
		<h1 class="font-mono text-7xl font-semibold">{page.status}</h1>
		<p class="mb-2 text-xl/8 font-medium">{page.error?.message}</p>
	{/if}
	<a href={resolve('/')} class="mb-2 rounded-lg bg-ctp-green-400 px-4 py-2 text-ctp-base"
		>Go back home</a
	>
</div>
<Footer />
