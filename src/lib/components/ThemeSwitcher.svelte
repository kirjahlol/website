<script lang="ts">
	import { browser } from '$app/environment';
	import { IconDeviceDesktop, IconMoon, IconSun, type Icon } from '@tabler/icons-svelte';

	interface Theme {
		id: number;
		name: string;
		ThemeIcon: Icon;
	}

	const themes: Theme[] = [
		{
			id: 1,
			name: 'system',
			ThemeIcon: IconDeviceDesktop
		},
		{
			id: 2,
			name: 'light',
			ThemeIcon: IconSun
		},
		{
			id: 3,
			name: 'dark',
			ThemeIcon: IconMoon
		}
	];

	function handleThemeChange() {
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
		if (!browser) return;

		const isThemeSystem = localStorage.getItem('theme-system');
		if (isThemeSystem === 'true') {
			selected = 'system';
		} else {
			const theme = localStorage.getItem('theme');
			if (theme && (theme === 'mocha' || theme === 'latte'))
				selected = theme === 'mocha' ? 'dark' : 'light';
		}
	});

	const isThemeDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)');
	isThemeDarkPreferred.addEventListener('change', (event) => {
		const isThemeSystem = localStorage.getItem('theme-system');
		if (isThemeSystem !== 'true') return;
		const defaultTheme = event.matches ? 'mocha' : 'latte';
		document.documentElement.className = defaultTheme;
		localStorage.setItem('theme', defaultTheme);
	});
</script>

<form
	class="fixed top-4 right-4 flex gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle p-2"
>
	{#each themes as theme (theme.id)}
		<div class="flex">
			<input
				type="radio"
				name="themes"
				id={theme.name}
				value={theme.name}
				bind:group={selected}
				onchange={handleThemeChange}
				aria-hidden="true"
				class="peer hidden"
			/>
			<label
				for={theme.name}
				class="cursor-pointer rounded-full p-2 peer-checked:bg-ctp-surface0/50"
				><theme.ThemeIcon /></label
			>
		</div>
	{/each}
</form>
