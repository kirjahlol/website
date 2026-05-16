<script lang="ts">
	export interface ExternalLink {
		id: number;
		href: string;
		content: string;
	}

	let { externalLinks }: { externalLinks: ExternalLink[] } = $props();
</script>

<section>
	<h3>External Links</h3>
	<div class="flex items-center justify-center gap-x-2">
		{#each externalLinks as { id, href, content } (id)}
			<a {href} rel="external">{content}</a>
			<span class="text-[0.5rem] last-of-type:hidden">&bull;</span>
		{/each}
	</div>
</section>
