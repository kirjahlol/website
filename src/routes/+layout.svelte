<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import './layout.css';
	import { fade } from 'svelte/transition';

	let visible = $state(false);

	$effect(() => {
		visible = true;
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{#if visible}
	<div transition:fade={{ duration: 300 }}>
		<ThemeSwitcher />
		<div class="flex flex-col items-center pt-[25vh] pb-[10vh]">
			{@render children()}
			<Footer />
		</div>
	</div>
{/if}
