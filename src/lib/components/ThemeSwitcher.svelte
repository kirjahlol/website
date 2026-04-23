<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';

	interface Theme {
		name: string;
		icon: string;
	}

	const themes: Theme[] = [
		{
			name: 'system',
			icon: 'tabler:device-desktop'
		},
		{
			name: 'light',
			icon: 'tabler:sun'
		},
		{
			name: 'dark',
			icon: 'tabler:moon'
		}
	];

	function handleThemeChange() {
		if (!browser) return;

		if (selected === 'system') {
			const isThemeDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = isThemeDarkPreferred ? 'mocha' : 'latte';
			document.documentElement.className = defaultTheme;

			localStorage.setItem('theme', defaultTheme);
			localStorage.setItem('theme-system', 'true');
		} else {
			const theme = selected === 'dark' ? 'mocha' : 'latte';
			document.documentElement.className = theme;

			localStorage.setItem('theme', theme);
			localStorage.setItem('theme-system', 'false');
		}
	}

	let selected: 'light' | 'dark' | 'system' = $state('system');

	$effect(() => {
		const isThemeSystem = localStorage.getItem('theme-system');
		if (isThemeSystem === 'true') {
			selected = 'system';

			const isThemeDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = isThemeDarkPreferred ? 'mocha' : 'latte';
			document.documentElement.className = defaultTheme;
		} else {
			const theme = localStorage.getItem('theme');

			if (theme && (theme === 'mocha' || theme === 'latte'))
				selected = theme === 'mocha' ? 'dark' : 'light';
		}

		const isThemeDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)');
		isThemeDarkPreferred.addEventListener('change', (event) => {
			const isThemeSystem = localStorage.getItem('theme-system');
			if (isThemeSystem !== 'true') return;

			const defaultTheme = event.matches ? 'mocha' : 'latte';
			document.documentElement.className = defaultTheme;
			localStorage.setItem('theme', defaultTheme);
		});
	});
</script>

<form
	class="absolute top-4 right-4 flex gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle p-2"
>
	{#each themes as { name, icon }, i (i)}
		<div class="flex">
			<input
				type="radio"
				name="themes"
				id={name}
				value={name}
				bind:group={selected}
				onchange={handleThemeChange}
				aria-hidden="true"
				class="peer hidden"
			/>
			<label
				for={name}
				class="cursor-pointer rounded-full p-2 peer-checked:bg-ctp-surface0/50 peer-checked:font-semibold"
				><Icon {icon} class="size-6" /></label
			>
		</div>
	{/each}
</form>
