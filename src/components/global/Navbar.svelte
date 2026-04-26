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
		}
	];
</script>

<nav>
	<li class="flex gap-4 border-b border-b-ctp-surface0">
		{#each links as link, i (i)}
			<NavbarLink {...link} />
		{/each}
	</li>
</nav>
