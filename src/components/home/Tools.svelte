<script lang="ts">
	import Icon from '@iconify/svelte';

	interface ToolLabel {
		id: number;
		icon: string;
		name: string;
	}

	interface Tool {
		id: number;
		name: string;
		labels: ToolLabel[];
	}

	const tools: Tool[] = [
		{
			id: 1,
			name: 'Software',
			labels: [
				{
					id: 1,
					icon: 'devicon-plain:archlinux',
					name: 'Arch Linux'
				},
				{
					id: 2,
					icon: 'simple-icons:wezterm',
					name: 'Wezterm'
				},
				{
					id: 3,
					icon: 'devicon-plain:neovim',
					name: 'Neovim'
				},
				{
					id: 4,
					icon: 'devicon-plain:vscode',
					name: 'VSCode'
				}
			]
		},
		{
			id: 2,
			name: 'Languages',
			labels: [
				{
					id: 1,
					icon: 'devicon-plain:typescript',
					name: 'TypeScript'
				},
				{
					id: 2,
					icon: 'devicon-plain:godot',
					name: 'GDScript'
				},
				{
					id: 3,
					icon: 'devicon-plain:luau',
					name: 'Luau'
				}
			]
		},
		{
			id: 3,
			name: 'Frameworks',
			labels: [
				{
					id: 1,
					icon: 'devicon-plain:svelte',
					name: 'Svelte/SvelteKit'
				},
				{
					id: 2,
					icon: 'file-icons:tailwind',
					name: 'Tailwind CSS'
				}
			]
		},
		{
			id: 4,
			name: 'Game Engines',
			labels: [
				{
					id: 1,
					icon: 'devicon-plain:godot',
					name: 'Godot'
				},
				{
					id: 2,
					icon: 'simple-icons:robloxstudio',
					name: 'Roblox Studio'
				}
			]
		}
	];
</script>

<section>
	<h3>Tools</h3>
	{#each tools as { id, name, labels } (id)}
		<h2 class="mb-2 font-semibold text-ctp-subtext1">{name}</h2>
		<div class="flex flex-wrap gap-2 not-last-of-type:mb-4">
			{#each labels as { id, icon, name } (id)}
				<div
					class="flex items-center gap-2 rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2"
				>
					<Icon {icon} class="size-6" />
					{name}
				</div>
			{/each}
		</div>
		<hr class="last:hidden" />
	{/each}
</section>
