<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Banner from '$components/global/Banner.svelte';
	import Chatbox from '$components/global/Chatbox.svelte';
	import DateAndTime from '$components/global/DateAndTime.svelte';
	import Footer from '$components/global/Footer.svelte';
	import Navbar from '$components/global/Navbar.svelte';
	import Socials from '$components/global/Socials.svelte';
	import Status from '$components/global/Status.svelte';
	import type { LayoutProps } from '../$types';
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
<div class="flex min-h-screen flex-col items-center gap-4 p-4">
	<div
		class="flex max-w-lg flex-col gap-4 rounded-lg lg:grid lg:max-w-7xl lg:grid-cols-[1fr_3fr_1fr]"
	>
		<div class="col-span-3">
			<Banner />
		</div>
		<aside class="flex flex-col items-center gap-4">
			<div class="flex w-full flex-col gap-4">
				<Status />
				<Chatbox />
			</div>
		</aside>
		<main class="flex flex-col gap-4">
			<Navbar />
			<div class="grid">
				{#key page.url.pathname}
					<div
						in:fly={{ duration: 200, delay: 100, y: 20 }}
						out:fly={{ duration: 100, y: 10 }}
						class="col-start-1 row-start-1 w-full"
					>
						{@render children()}
					</div>
				{/key}
			</div>
		</main>
		<aside class="flex flex-col items-center gap-4">
			<div class="flex w-full flex-col gap-4">
				<DateAndTime />
				<Socials />
			</div>
		</aside>
	</div>
</div>
<Footer />
