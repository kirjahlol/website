<script lang="ts">
	import { browser } from '$app/environment';
	import { navigating, page } from '$app/state';
	import Banner from '$components/layout/Banner.svelte';
	import Chatbox from '$components/layout/Chatbox.svelte';
	import DateAndTime from '$components/layout/DateAndTime.svelte';
	import Footer from '$components/layout/Footer.svelte';
	import Navbar, { type Link } from '$components/layout/Navbar.svelte';
	import Socials from '$components/layout/Socials.svelte';
	import StatusWidget from '$components/layout/StatusWidget.svelte';
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

	let shouldShowLoadingText = $state(false);
	$effect(() => {
		let timeout: ReturnType<typeof setTimeout> | undefined;

		if (navigating.to) {
			timeout = setTimeout(() => {
				shouldShowLoadingText = true;
			}, 50);
		} else {
			shouldShowLoadingText = false;
		}

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	});

	const links: Link[] = [
		{
			id: 1,
			href: '/',
			name: 'Home'
		},
		{
			id: 2,
			href: '/about',
			name: 'About'
		},
		{
			id: 3,
			href: '/shrines',
			name: 'Shrines'
		},
		{
			id: 4,
			href: '/contact',
			name: 'Contact'
		}
	];

	let { children, data }: LayoutProps = $props();
</script>

{#if !isMounted}
	<div
		out:fade={{ duration: 300 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-ctp-base"
	></div>
{/if}
<div class="flex min-h-screen flex-col items-center p-4">
	<div class="flex w-full max-w-2xl flex-col gap-4 lg:grid lg:max-w-7xl lg:grid-cols-[1fr_3fr_1fr]">
		<div class="lg:col-span-3">
			<Banner />
		</div>
		<aside class="flex w-full flex-col gap-4">
			{#await data.status}
				<StatusWidget state="loading" />
			{:then status}
				<StatusWidget state="success" {status} />
			{:catch error}
				<StatusWidget state="error" errorMessage={error.message} />
			{/await}
			<Chatbox />
		</aside>
		<main class="flex flex-col gap-4">
			<Navbar {links} />
			<div class="grid">
				{#key page.url.pathname}
					<div
						in:fly={{ duration: 200, delay: 100, y: 20 }}
						out:fly={{ duration: 100, y: 10 }}
						class="col-start-1 row-start-1 flex w-full flex-col gap-4"
					>
						{#if shouldShowLoadingText}
							<section>Loading...</section>
						{:else}
							{@render children()}
						{/if}
					</div>
				{/key}
			</div>
		</main>
		<aside class="flex w-full flex-col gap-4">
			<DateAndTime />
			<Socials />
		</aside>
	</div>
</div>
<Footer />
