<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center">
	{#if page.status === 404}
		<h1 class="font-mono text-7xl font-semibold">404</h1>
		<p class="mb-2 text-xl/8 font-medium">Page not found. Sorry!</p>
		<a href={resolve('/')} class="mb-2 rounded-lg bg-ctp-green-400 px-4 py-2 text-ctp-base"
			>Go back home</a
		>
	{:else}
		<h1 class="font-mono text-7xl font-semibold">{page.status}</h1>
		<p class="mb-2 text-xl/8 font-medium">{page.error?.message}</p>
		<a href={resolve('/')} class="mb-2 rounded-lg bg-ctp-green-400 px-4 py-2 text-ctp-base"
			>Go back home</a
		>
	{/if}
</div>
