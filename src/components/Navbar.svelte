<script lang="ts">
	import NavbarLink, { type LinkProps } from './NavbarLink.svelte';
	import { IconHome, IconQuestionMark } from '@tabler/icons-svelte';

	const links: LinkProps[] = [
		{
			id: 1,
			href: '/',
			LinkIcon: IconHome,
			name: 'Home'
		},
		{
			id: 2,
			href: '/foo',
			LinkIcon: IconQuestionMark,
			name: 'Foo'
		}
	];
</script>

<nav class="fixed bottom-0 z-50 w-screen border-t border-ctp-surface0 bg-ctp-mantle p-2">
	<li class="flex justify-center gap-2">
		{#each links as link (link.id)}
			<NavbarLink {...link} />
		{/each}
	</li>
</nav>
