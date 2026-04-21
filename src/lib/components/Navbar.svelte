<script lang="ts">
	import NavbarLink, { type LinkProps } from './NavbarLink.svelte';
	import { IconHome } from '@tabler/icons-svelte';

	const links: LinkProps[] = [
		{
			id: 1,
			href: '/',
			LinkIcon: IconHome,
			name: 'Home'
		}
	];
</script>

<nav class="rounded-lg border border-ctp-surface0 bg-ctp-mantle p-2">
	<li class="flex gap-2">
		{#each links as link (link.id)}
			<NavbarLink {...link} />
		{/each}
	</li>
</nav>
