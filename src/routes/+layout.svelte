<script lang="ts">
	import { browser } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import preview from '$lib/assets/preview.webp';
	import profilePicture from '$lib/assets/profile-picture.webp';
	import DateAndTime from '$lib/components/DateAndTime.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import Status from '$lib/components/Status.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Webrings from '$lib/components/Webrings.svelte';
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

	let isUnmounted = $state(true);
	$effect(() => {
		isUnmounted = false;
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>kirjah</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content="kirjah's website." />
	<meta property="og:title" content="kirjah" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={preview} />
	<meta property="og:image:alt" content="A Scolipede from Pokémon Rumble Rush" />
	<meta property="og:url" content="https://kirjah.lol" />
	<meta property="og:description" content="kirjah's website." />
	<meta property="og:site_name" content="kirjah" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@kirjahlol" />
</svelte:head>
{#if isUnmounted}
	<div
		out:fade={{ duration: 300 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-ctp-base"
	></div>
{/if}
<Header />
<ThemeSwitcher />
<div class="flex flex-col items-center px-4 pt-[25vh] pb-4">
	<div class="flex max-w-7xl flex-col gap-4 rounded-lg lg:grid lg:grid-cols-[1fr_3fr_1fr]">
		<aside class="flex flex-col items-center gap-4 [&_section]:w-full">
			<img
				src={profilePicture}
				alt="A Scolipede from Pokémon Rumble Rush"
				class="size-48 rounded-full bg-ctp-mantle"
			/>
			<Status />
			<DateAndTime />
			<Socials />
		</aside>
		<main class="flex flex-col gap-4 [&_section]:w-full">
			<Navbar />
			{@render children()}
		</main>
		<aside class="flex flex-col items-center gap-4 [&_section]:w-full">
			<Webrings />
		</aside>
	</div>
	<Footer />
</div>
