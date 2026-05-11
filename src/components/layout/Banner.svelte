<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import banner1 from '$assets/banners/banner-1.webp';
	import banner2 from '$assets/banners/banner-2.webp';
	import SplashText from './SplashText.svelte';
	import { onMount } from 'svelte';

	interface Banner {
		imageSource: string;
		creditUrl: string;
		credit: string;
	}

	const banners: Banner[] = [
		{
			imageSource: banner1,
			creditUrl: 'https://twitter.com/yuuji7604',
			credit: '@yuuji7604 on Twitter'
		},
		{
			imageSource: banner2,
			creditUrl: 'https://twitter.com/ThatOneHaxorus',
			credit: '@ThatOneHaxorus on Twitter'
		}
	];

	let banner = $state(banners[0]);
	onMount(() => {
		const randomBannerIndex = Math.floor(Math.random() * banners.length);
		banner = banners[randomBannerIndex];
	});

	let hostname = $state('kirjah.lol');
	if (page.url.hostname !== 'localhost') {
		hostname = page.url.hostname;
	}
</script>

<div class="rounded-lg border border-ctp-surface0 bg-ctp-mantle">
	<div class="relative">
		<a href={resolve('/')}>
			<img
				src={banner.imageSource}
				alt="Banner"
				fetchpriority="high"
				class="rounded-t-lg border-b border-ctp-surface0"
			/>
		</a>
		<h1
			class="absolute top-0 left-0 rounded-tl-lg rounded-br-lg p-1 font-mono text-base font-semibold text-ctp-base text-shadow-ctp-text text-shadow-md lg:p-2 lg:text-lg"
		>
			{hostname}
		</h1>
		<h2
			class="absolute right-0 bottom-0 rounded-tl-lg p-1 text-sm font-semibold text-ctp-base text-shadow-ctp-text text-shadow-md lg:p-2 lg:text-base"
		>
			Credit: <a href={banner.creditUrl} rel="external" target="_blank" class="hover:underline"
				>{banner.credit}</a
			>
		</h2>
		<h3
			class="absolute top-0 right-0 p-1 text-xs font-semibold text-ctp-base text-shadow-ctp-text text-shadow-md lg:p-2 lg:text-sm"
		>
			({banners.map((value) => value.imageSource).indexOf(banner.imageSource) + 1}/{banners.length})
		</h3>
	</div>
	<div class="p-2">
		<SplashText />
	</div>
</div>
