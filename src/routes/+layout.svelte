<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import favicon from '$assets/favicon.svg';
	import preview from '$assets/preview.webp';
	import profilePicture from '$assets/profile-picture.webp';
	import Buttons from '$components/global/Buttons.svelte';
	import DateAndTime from '$components/global/DateAndTime.svelte';
	import Footer from '$components/global/Footer.svelte';
	import Header from '$components/global/Header.svelte';
	import Navbar from '$components/global/Navbar.svelte';
	import Socials from '$components/global/Socials.svelte';
	import Status from '$components/global/Status.svelte';
	import ThemeSwitcher from '$components/global/ThemeSwitcher.svelte';
	import Webrings from '$components/global/Webrings.svelte';
	import './layout.css';
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
	<div
		class="flex max-w-lg flex-col gap-4 rounded-lg lg:grid lg:max-w-7xl lg:grid-cols-[1fr_3fr_1fr]"
	>
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
			{#key page.url.pathname}
				<div in:fly={{ duration: 200, delay: 100, y: 20 }} out:fly={{ duration: 100, y: 10 }}>
					{@render children()}
				</div>
			{/key}
		</main>
		<aside class="flex flex-col items-center gap-4 [&_section]:w-full">
			<Buttons />
			<Webrings />
		</aside>
	</div>
	<Footer />
</div>
