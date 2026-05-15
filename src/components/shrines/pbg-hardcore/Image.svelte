<script lang="ts">
	let { src, alt, caption }: { src: string; alt: string; caption?: string } = $props();
</script>

<img {src} {alt} loading="lazy" />
<div class="text-sm text-ctp-subtext0">
	{#if caption}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		({@html caption})
	{:else}
		({alt})
	{/if}
</div>
