<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let { quotes }: { quotes: Snippet[] } = $props();

	let Quote = $derived(quotes[0]);
	onMount(() => {
		const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
		Quote = quotes[randomQuoteIndex];
	});
</script>

<section>
	<h3>Quote</h3>
	<span class="flex flex-col gap-2">
		<Quote />
		<span class="text-sm text-ctp-subtext0">({quotes.indexOf(Quote) + 1}/{quotes.length})</span>
	</span>
	<span class="text-xs text-ctp-subtext0">Refresh the page for a new quote!</span>
</section>
