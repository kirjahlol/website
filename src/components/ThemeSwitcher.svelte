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

<div class="absolute flex w-screen flex-row-reverse p-4">
	<button
		onclick={handleThemeSwitch}
		class="cursor-pointer transition-[scale] duration-150 active:scale-90"
	>
		{#if theme === 'latte'}
			<IconSun size={48} class="animate-spring" />
		{:else}
			<IconMoon size={48} class="animate-spring" />
		{/if}
	</button>
</div>
