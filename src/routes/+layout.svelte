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
		<div class="flex min-h-screen flex-col items-center justify-center gap-2">
			<Navbar />
			<ThemeSwitcher />
			{@render children()}
			<footer>
				<a href="https://github.com/kirjahlol/website" target="_blank">Source code</a>
			</footer>
		</div>
	</div>
{/if}
