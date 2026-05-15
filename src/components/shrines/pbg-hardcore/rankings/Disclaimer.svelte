<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="mb-2 flex flex-col border-l-2 border-ctp-red-400 pl-2 text-ctp-red-400">
	<span class="flex gap-2">
		<Icon icon="tabler:alert-circle" class="size-6" />
		<b>Disclaimer</b>
	</span>
	<span>
		{@render children()}
	</span>
</span>
