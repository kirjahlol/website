<script lang="ts">
	import { page } from '$app/state';
	import { type ResolvedPathname } from '$app/types';

	interface Props {
		href: ResolvedPathname;
		name: string;
	}

	let { href, name }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class={[
		'rounded-lg px-4 py-2',
		page.url.pathname === href ? 'bg-ctp-green-400 text-ctp-mantle' : ''
	]}>{name}</a
>
