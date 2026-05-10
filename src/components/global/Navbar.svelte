<script lang="ts">
	import NavbarLink, { type LinkProps } from './NavbarLink.svelte';

	const links: LinkProps[] = [
		{
			id: 1,
			href: '/',
			name: 'Home'
		},
		{
			id: 2,
			href: '/about',
			name: 'About'
		},
		{
			id: 3,
			href: '/shrines',
			name: 'Shrines'
		},
		{
			id: 4,
			href: '/contact',
			name: 'Contact'
		}
	];
</script>

<nav class="overflow-x-auto">
	<ul class="mb-px flex gap-4 border-b border-ctp-surface0 whitespace-nowrap">
		{#each links as link (link.id)}
			<NavbarLink {...link} />
		{/each}
	</ul>
</nav>
