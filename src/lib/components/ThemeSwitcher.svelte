<script lang="ts">
	import { IconDeviceDesktop, IconMoon, IconSun, type Icon } from '@tabler/icons-svelte';

	interface Theme {
		id: number;
		name: string;
		ThemeIcon: Icon;
	}

	const themes: Theme[] = [
		{
			id: 1,
			name: 'light',
			ThemeIcon: IconSun
		},
		{
			id: 2,
			name: 'dark',
			ThemeIcon: IconMoon
		},
		{
			id: 3,
			name: 'system',
			ThemeIcon: IconDeviceDesktop
		}
	];
</script>

<form
	class="fixed top-4 right-4 flex gap-2 rounded-full border border-ctp-surface0 bg-ctp-mantle p-2"
>
	{#each themes as theme (theme.id)}
		<div class="flex">
			<input
				type="radio"
				name="theme"
				id={theme.name}
				value={theme.name}
				aria-hidden="true"
				class="peer hidden"
			/>
			<label for={theme.name} class="rounded-full p-2 peer-checked:bg-ctp-surface0/50"
				><theme.ThemeIcon /></label
			>
		</div>
	{/each}
</form>
