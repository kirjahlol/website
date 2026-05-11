<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
	import type { LayoutProps } from './$types';
	import './layout.css';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

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

	let isMounted = $state(false);
	onMount(() => {
		isMounted = true;
	});

	let { children }: LayoutProps = $props();
</script>

{#if !isMounted}
	<div
		out:fade={{ duration: 300 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-ctp-base"
	></div>
{/if}
<div class="absolute flex w-screen justify-between p-4">
	<Header headerStyle="shrine" />
</div>
<div class="flex min-h-screen flex-col items-center px-4 pt-[25vh] pb-4">
	<div class="flex max-w-2xl flex-col">
		<main class="flex flex-col">
			<div class="grid">
				{#key page.url.pathname}
					<div
						in:fly={{ duration: 200, delay: 100, y: 20 }}
						out:fly={{ duration: 100, y: 10 }}
						class="col-start-1 row-start-1 flex w-full flex-col gap-4"
					>
						{@render children()}
					</div>
				{/key}
			</div>
		</main>
	</div>
</div>
<Footer />
