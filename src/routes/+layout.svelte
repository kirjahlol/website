<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
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
		<Navbar />
		<ThemeSwitcher />
		{@render children()}
	</div>
{/if}
