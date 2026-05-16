<script lang="ts">
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';

	let { href, name }: { href: ResolvedPathname; name: string } = $props();

	let active = $derived(page.url.pathname === href);
</script>

<li class="flex">
	<a {href} data-sveltekit-noscroll class={['-mb-px pb-2 font-semibold', { active }]}>{name}</a>
</li>

<style>
	@reference '$routes/(app)/layout.css';

	a.active {
		@apply pointer-events-none border-b border-ctp-green-400 text-ctp-green-400;
	}

	:global(.pbg-hardcore) a.active {
		@apply pointer-events-none border-b border-ctp-yellow text-ctp-yellow;
	}

	a:not(.active) {
		@apply hover:border-b hover:border-ctp-text;
	}
</style>
