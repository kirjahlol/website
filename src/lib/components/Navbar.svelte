<script lang="ts">
	import NavbarLink, { type LinkProps } from './NavbarLink.svelte';

	const links: LinkProps[] = [
		{
			id: 1,
			href: '/',
			name: '~/'
		},
		{
			id: 2,
			href: '/contact',
			name: '~/contact'
		}
	];
</script>

<nav class="rounded-lg border border-ctp-surface0 bg-ctp-mantle p-4">
	<li class="flex gap-4">
		{#each links as link (link.id)}
			<NavbarLink {...link} />
		{/each}
	</li>
</nav>
