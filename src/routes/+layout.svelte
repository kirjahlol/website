<script lang="ts">
	import preview from '$assets/preview.webp';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>kirjah</title>
	<meta name="description" content="kirjah's website." />
	<meta name="theme-color" content="#40a02b" />

	<!-- Open Graph -->
	<meta property="og:title" content="kirjah" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={preview} />
	<meta property="og:image:alt" content="A Scolipede from Pokémon Rumble Rush" />
	<meta property="og:url" content="https://kirjah.lol" />
	<meta property="og:description" content="kirjah's website." />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@kirjahlol" />
</svelte:head>
{@render children()}
