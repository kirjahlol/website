<script lang="ts">
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';
	import type { Icon } from '@tabler/icons-svelte';

	export interface LinkProps {
		id: number;
		href: ResolvedPathname;
		LinkIcon: Icon;
		name: string;
	}

	let { href, LinkIcon, name }: LinkProps = $props();

	let active = $derived(page.url.pathname === href);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} class={['flex gap-2 rounded-lg p-2 transition-[scale] duration-150', { active }]}
	><LinkIcon /> {name}</a
>

<style>
	@reference '@routes/layout.css';

	a.active {
		@apply pointer-events-none animate-spring bg-ctp-green-400 text-ctp-mantle;
	}

	a:not(.active) {
		@apply hover:bg-ctp-surface0/50 active:scale-90;
	}
</style>
