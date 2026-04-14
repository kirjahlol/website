<script lang="ts">
	import { browser } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';
	import './layout.css';
	import { fade } from 'svelte/transition';

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

	let visible = $state(false);

	$effect(() => {
		visible = true;
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{#if visible}
	<div transition:fade={{ duration: 300 }}>
		<Navbar />
		{@render children()}
	</div>
{/if}
