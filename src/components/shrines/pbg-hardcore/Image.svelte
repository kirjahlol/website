<script lang="ts">
	let { src, caption }: { src: string; caption: string } = $props();
</script>

<img {src} alt="" loading="lazy" />
<div class="text-sm text-ctp-subtext0" aria-hidden="true">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	({@html caption})
</div>
