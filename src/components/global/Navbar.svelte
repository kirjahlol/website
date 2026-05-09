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

<nav>
	<ul>
		<li class="flex gap-4 border-b border-b-ctp-surface0">
			{#each links as link (link.id)}
				<NavbarLink {...link} />
			{/each}
		</li>
	</ul>
</nav>
