<script lang="ts">
	import { browser } from '$app/environment';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';

	if (browser) {
		const isThemeAuto = localStorage.getItem('theme-auto');
		if (isThemeAuto === null) {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = prefersDark ? 'mocha' : 'latte';
			localStorage.setItem('theme', defaultTheme);
			localStorage.setItem('theme-auto', 'true');
			document.documentElement.className = defaultTheme;
		}

		const theme = localStorage.getItem('theme');
		if (theme) {
			document.documentElement.className = theme;
		}
	}

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
<div class="flex min-h-screen items-center justify-center">
	<div class="grid h-96 w-5xl grid-cols-[1fr_3fr] gap-4 rounded-lg">
		<div class="rounded-lg border p-4">stuff</div>
		<div class="rounded-lg border p-4">
			{@render children()}
		</div>
	</div>
</div>
