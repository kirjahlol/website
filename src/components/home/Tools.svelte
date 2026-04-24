<script lang="ts">
	import Icon from '@iconify/svelte';

	interface ToolLabel {
		icon: string;
		name: string;
	}

	interface Tool {
		name: string;
		labels: ToolLabel[];
	}

	const tools: Tool[] = [
		{
			name: 'Software',
			labels: [
				{
					icon: 'devicon-plain:archlinux',
					name: 'Arch Linux'
				},
				{
					icon: 'simple-icons:wezterm',
					name: 'Wezterm'
				},
				{
					icon: 'devicon-plain:neovim',
					name: 'Neovim'
				},
				{
					icon: 'devicon-plain:vscode',
					name: 'VSCode'
				}
			]
		},
		{
			name: 'Languages',
			labels: [
				{
					icon: 'devicon-plain:typescript',
					name: 'TypeScript'
				},
				{
					icon: 'devicon-plain:godot',
					name: 'GDScript'
				},
				{
					icon: 'devicon-plain:luau',
					name: 'Luau'
				}
			]
		},
		{
			name: 'Frameworks',
			labels: [
				{
					icon: 'devicon-plain:svelte',
					name: 'Svelte/SvelteKit'
				},
				{
					icon: 'file-icons:tailwind',
					name: 'Tailwind CSS'
				}
			]
		},
		{
			name: 'Game Engines',
			labels: [
				{
					icon: 'devicon-plain:godot',
					name: 'Godot'
				},
				{
					icon: 'simple-icons:robloxstudio',
					name: 'Roblox Studio'
				}
			]
		}
	];
</script>

<section>
	<h3>Tools</h3>
	{#each tools as { name, labels }, i (i)}
		<h2 class="mb-2 font-semibold text-ctp-subtext1">{name}</h2>
		<div class="flex flex-wrap gap-2 not-last-of-type:mb-4">
			{#each labels as { icon, name }, i (i)}
				<div
					class="flex items-center gap-2 rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2"
				>
					<Icon {icon} class="size-6" />
					{name}
				</div>
			{/each}
		</div>
		<hr class="my-4 last:hidden" />
	{/each}
</section>
