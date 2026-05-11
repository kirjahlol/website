<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	let hostname = $state('kirjah.lol');
	if (page.url.hostname !== 'localhost') {
		hostname = page.url.hostname;
	}

	const { headerStyle = 'normal' }: { headerStyle?: 'normal' | 'shrine' } = $props();
</script>

{#if headerStyle === 'normal'}
	<header class="font-mono text-lg font-medium">
		<a href={resolve('/')}>{hostname}</a>
	</header>
{:else if headerStyle === 'shrine'}
	<header class="text-lg font-medium">
		<a href={resolve('/')} class="flex items-center gap-2"
			><Icon icon="tabler:arrow-left" class="size-6" /> Back to home</a
		>
	</header>
{/if}
