<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import pbgHardcoreLogo from '$assets/shrines/pbg-hardcore-logo.webp';
	import minecraftAppIcon from '$assets/shrines/pbg-hardcore/minecraft-app-icon.webp';
	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';
	import Navbar, { type Link } from '$components/layout/Navbar.svelte';
	import FavoriteHardcoreGame from '$components/shrines/pbg-hardcore/FavoriteHardcoreGame.svelte';
	import FavoriteHardcoreTwist from '$components/shrines/pbg-hardcore/FavoriteHardcoreTwist.svelte';
	import Quote from '$components/shrines/pbg-hardcore/Quote.svelte';
	import MolecoreExplanation from '$components/shrines/pbg-hardcore/molecore-explanation.md';
	import type { LayoutProps } from './$types';
	import './layout.css';
	import { onMount, type Snippet } from 'svelte';
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

	const links: Link[] = [
		{
			id: 1,
			href: '/shrines/pbg-hardcore',
			name: 'About'
		},
		{
			id: 2,
			href: '/shrines/pbg-hardcore/community',
			name: 'Community'
		},
		{
			id: 3,
			href: '/shrines/pbg-hardcore/rankings',
			name: 'Rankings'
		}
	];

	const modules = import.meta.glob<{ default: Snippet }>(
		'$components/shrines/pbg-hardcore/quotes/*.md',
		{
			eager: true
		}
	);
	const quotes = Object.values(modules).map((module) => module.default);

	let { children }: LayoutProps = $props();
</script>

<div class="pbg-hardcore">
	{#if !isMounted}
		<div
			out:fade={{ duration: 300 }}
			class="fixed inset-0 z-50 flex items-center justify-center bg-ctp-base"
		></div>
	{/if}
	<div class="w-fit p-4">
		<Header headerStyle="shrine" />
	</div>
	<div class="flex min-h-screen flex-col items-center p-4">
		<div
			class="flex w-full max-w-2xl flex-col gap-4 lg:grid lg:max-w-7xl lg:grid-cols-[1fr_3fr_1fr]"
		>
			<a
				href={resolve('/shrines/pbg-hardcore')}
				data-sveltekit-noscroll
				class="flex justify-center lg:col-span-3"
			>
				<img
					src={pbgHardcoreLogo}
					alt="Logo for PeanutButterGamer's Hardcore series"
					class="w-fit"
				/>
			</a>
			<aside class="flex w-full flex-col gap-4">
				<FavoriteHardcoreGame
					name="Minecraft"
					imageSource={minecraftAppIcon}
					imageAlt="Minecraft app icon"
				/>
				<FavoriteHardcoreTwist name="Molecore" game="Minecraft" Explanation={MolecoreExplanation} />
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
							{@render children()}
						</div>
					{/key}
				</div>
			</main>
			<aside class="flex w-full flex-col gap-4">
				<Quote {quotes} />
			</aside>
		</div>
	</div>
	<Footer />
</div>
