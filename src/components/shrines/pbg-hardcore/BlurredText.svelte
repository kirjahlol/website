<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span
	class="blur-sm transition-[filter] duration-200 max-lg:focus:blur-none lg:hover:blur-none"
	tabIndex="-1"
>
	{@render children()}
</span>
