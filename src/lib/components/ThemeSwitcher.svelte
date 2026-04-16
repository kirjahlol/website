<script lang="ts">
	import { IconMoon, IconSun } from '@tabler/icons-svelte';

	let theme: 'latte' | 'mocha' = $state('latte');

	function handleThemeSwitch() {
		if (theme === 'latte') {
			theme = 'mocha';
		} else {
			theme = 'latte';
		}
	}

	$effect(() => {
		document.documentElement.className = theme;
	});
</script>

<button
	onclick={handleThemeSwitch}
	class="absolute top-4 right-4 cursor-pointer transition-[scale] duration-150 hover:scale-110 active:scale-90"
>
	{#if theme === 'latte'}
		<IconSun size={48} class="animate-spring" />
	{:else}
		<IconMoon size={48} class="animate-spring" />
	{/if}
</button>
