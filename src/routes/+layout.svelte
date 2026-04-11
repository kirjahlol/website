<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen items-center justify-center">
	<div class="grid h-96 w-5xl grid-cols-[1fr_3fr] gap-4 rounded-lg">
		<div class="rounded-lg border p-4">stuff</div>
		<div class="rounded-lg border p-4">
			{@render children()}
		</div>
	</div>
</div>
