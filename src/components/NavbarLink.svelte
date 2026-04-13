<script lang="ts">
	import { page } from '$app/state';
	import { type ResolvedPathname } from '$app/types';
	import { type Icon } from '@tabler/icons-svelte';

	interface Props {
		href: ResolvedPathname;
		LinkIcon: Icon;
		name: string;
	}

	let { href, LinkIcon, name }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class={[
		'flex gap-2 rounded-lg px-4 py-2',
		page.url.pathname === href ? 'bg-ctp-green-400 font-semibold text-ctp-mantle' : ''
	]}><LinkIcon /> {name}</a
>
