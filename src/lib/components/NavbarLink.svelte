<script lang="ts">
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';

	export interface LinkProps {
		id: number;
		href: ResolvedPathname;
		name: string;
	}

	let { href, name }: LinkProps = $props();

	let active = $derived(page.url.pathname === href);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} data-sveltekit-noscroll class={[' rounded-md font-mono', { active }]}>{name}</a>

<style>
	@reference '@routes/layout.css';

	a.active {
		@apply pointer-events-none font-semibold text-ctp-green;
	}

	a:not(.active) {
		@apply hover:underline;
	}
</style>
