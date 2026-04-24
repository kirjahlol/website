<script lang="ts">
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';

	export interface LinkProps {
		href: ResolvedPathname;
		name: string;
	}

	let { href, name }: LinkProps = $props();

	let active = $derived(page.url.pathname === href);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} data-sveltekit-noscroll class={['-mb-px p-2', { active }]}>{name}</a>

<style>
	@reference '$routes/layout.css';

	a.active {
		@apply pointer-events-none border-b border-b-ctp-green text-ctp-green;
	}

	a:not(.active) {
		@apply text-ctp-text hover:border-b hover:border-b-ctp-text;
	}
</style>
