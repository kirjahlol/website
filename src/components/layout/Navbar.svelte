<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import NavbarLink from './NavbarLink.svelte';

	export interface Link {
		id: number;
		href: ResolvedPathname;
		name: string;
	}

	const { links }: { links: Link[] } = $props();
</script>

<nav class="overflow-x-auto">
	<ul class="mb-px flex gap-4 border-b border-ctp-surface0 whitespace-nowrap">
		{#each links as link (link.id)}
			<NavbarLink {...link} />
		{/each}
	</ul>
</nav>
