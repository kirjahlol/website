<script lang="ts">
	import { type ResolvedPathname } from '$app/types';

	interface Props {
		href: ResolvedPathname;
		name: string;
	}

	let { href, name }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} class="rounded-lg border px-4 py-2">{name}</a>
