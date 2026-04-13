<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
</script>

<nav class="fixed bottom-0 z-50 w-screen border-t border-ctp-surface0 bg-ctp-mantle p-2">
	<li class="flex justify-center gap-2">
		<NavbarLink href="/" name="home" />
		<NavbarLink href="/foo" name="foo" />
	</li>
</nav>
