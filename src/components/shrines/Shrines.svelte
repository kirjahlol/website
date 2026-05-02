<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { tooltip } from '$lib';

	export interface Shrine {
		id: number;
		pathname: ResolvedPathname;
		name: string;
		imageSource: string;
	}

	let { shrines }: { shrines: Shrine[] } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each shrines as { id, name, pathname, imageSource } (id)}
		<a href={pathname} class="flex justify-center" {@attach tooltip(name, 'bottom')}>
			<img src={imageSource} alt={name} class="w-[80%]" />
		</a>
	{/each}
</div>
