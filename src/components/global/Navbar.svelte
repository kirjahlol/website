<script lang="ts">
	import NavbarLink, { type LinkProps } from './NavbarLink.svelte';

	const links: LinkProps[] = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/contact',
			name: 'Contact'
		},
		{
			href: '/shrines',
			name: 'Shrines'
		}
	];
</script>

<nav>
	<ul>
		<li class="flex gap-4 border-b border-b-ctp-surface0">
			{#each links as link, i (i)}
				<NavbarLink {...link} />
			{/each}
		</li>
	</ul>
</nav>
