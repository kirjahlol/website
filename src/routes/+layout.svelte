<script lang="ts">
	import { browser } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import './layout.css';
	import { fade } from 'svelte/transition';

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

	let visible = $state(false);

	$effect(() => {
		visible = true;
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{#if visible}
	<div transition:fade={{ duration: 300 }}>
		<ThemeSwitcher />
		<div class="flex flex-col items-center px-4 pt-[25vh] pb-4">
			{@render children()}
			<Footer />
		</div>
	</div>
{/if}
