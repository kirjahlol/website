<script lang="ts">
	import { onMount } from 'svelte';

	const splashTexts: string[] = [
		"You'll never guess what my favorite Pokémon is!",
		"Check out the Shrines page (or don't, I guess)!",
		'gurt: yo',
		'asdfjkl;',
		'wow coming up with these is harder than i thought',
		'Mobile friendly!',
		'Bugs are so cool...',
		'gorp',
		':3',
	];

	let splashText = $state(splashTexts[0]);
	onMount(() => {
		const randomSplashTextIndex = Math.floor(Math.random() * splashTexts.length);
		splashText = splashTexts[randomSplashTextIndex];
	});
</script>

<span class="flex items-center gap-2">
	<h1 class="text-lg text-ctp-subtext1">
		&ldquo;{splashText}&rdquo;
	</h1>
	<h2 class="text-sm text-ctp-subtext0">
		({splashTexts.indexOf(splashText) + 1}/{splashTexts.length})
	</h2>
</span>
