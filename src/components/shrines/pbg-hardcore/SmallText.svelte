<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="text-sm text-ctp-subtext0">
	{@render children()}
</div>
