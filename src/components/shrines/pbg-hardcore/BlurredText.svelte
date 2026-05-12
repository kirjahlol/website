<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="blur-sm transition-[filter] duration-200 hover:blur-none">
	{@render children()}
</span>
