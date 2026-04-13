<script lang="ts">
	import { page } from '$app/state';
	import { type ResolvedPathname } from '$app/types';
	import { type Icon } from '@tabler/icons-svelte';

	export interface LinkProps {
		id: number;
		href: ResolvedPathname;
		LinkIcon: Icon;
		name: string;
	}

	let { href, LinkIcon, name }: LinkProps = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class={[
		'flex gap-2 rounded-lg px-4 py-2 transition duration-150',
		page.url.pathname === href
			? 'bg-ctp-green-400 font-semibold text-ctp-mantle'
			: 'hover:bg-ctp-surface0/50'
	]}><LinkIcon /> {name}</a
>
