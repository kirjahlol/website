<script lang="ts">
	import type { Snippet } from 'svelte';

	let { name, game, Explanation }: { name: string; game: string; Explanation: Snippet } = $props();
</script>

<section>
	<h3>
		Favorite Hardcore <a href="https://hardcore.wiki/wiki/List_of_Game_Modifications">Twist</a>
	</h3>
	<h1 class="mb-0! text-lg">{name} (<i>{game}</i>)</h1>
	<Explanation />
</section>
