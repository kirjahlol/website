<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import banner1 from '$assets/banners/banner-1.webp';
	import banner2 from '$assets/banners/banner-2.webp';
	import { onMount } from 'svelte';

	interface Banner {
		imageSource: string;
		credit: string;
		creditUrl: string;
	}

	const banners: Banner[] = [
		{
			imageSource: banner1,
			credit: '@yuuji7604 on Twitter',
			creditUrl: 'https://x.com/yuuji7604'
		},
		{
			imageSource: banner2,
			credit: '@ThatOneHaxorus on Twitter',
			creditUrl: 'https://x.com/ThatOneHaxorus'
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

<div class="relative">
	<a href={resolve('/')}>
		<img src={banner.imageSource} alt="Banner" class="rounded-lg" />
	</a>
	<h1
		class="absolute top-0 left-0 rounded-br-lg bg-ctp-base/75 p-1 font-mono text-sm font-semibold lg:p-2 lg:text-lg"
	>
		{hostname}
	</h1>
	<h2
		class="absolute right-0 bottom-0 rounded-tl-lg bg-ctp-base/75 p-1 text-xs font-semibold lg:p-2 lg:text-base"
	>
		Credit: <a href={banner.creditUrl} rel="external" target="_blank" class="hover:underline"
			>{banner.credit}</a
		>
	</h2>
</div>
