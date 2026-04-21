<script lang="ts">
	import { browser } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import preview from '$lib/assets/preview.webp';
	import profilePicture from '$lib/assets/profile-picture.webp';
	import DateAndTime from '$lib/components/DateAndTime.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import Status from '$lib/components/Status.svelte';
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
{#if visible}
	<div transition:fade={{ duration: 300 }}>
		<Header />
		<ThemeSwitcher />
		<div class="flex flex-col items-center px-4 pt-[25vh] pb-4">
			<div class="flex max-w-5xl grid-cols-[1fr_3fr] flex-col gap-4 rounded-lg sm:grid">
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
					{@render children()}
				</main>
			</div>
			<Footer />
		</div>
	</div>
{/if}
