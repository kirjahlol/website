<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	import { IconHome, IconQuestionMark } from '@tabler/icons-svelte';
</script>

<nav class="fixed bottom-0 z-50 w-screen border-t border-ctp-surface0 bg-ctp-mantle p-2">
	<li class="flex justify-center gap-2">
		<NavbarLink href="/" LinkIcon={IconHome} name="Home" />
		<NavbarLink href="/foo" LinkIcon={IconQuestionMark} name="Foo" />
	</li>
</nav>
