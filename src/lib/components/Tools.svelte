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
			name: 'Editors',
			labels: [
				{
					id: 1,
					icon: 'devicon-plain:neovim',
					name: 'Neovim'
				},
				{
					id: 2,
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
					icon: 'devicon-plain:svelte',
					name: 'Svelte'
				},
				{
					id: 3,
					icon: 'devicon-plain:godot',
					name: 'GDScript'
				},
				{
					id: 4,
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
					name: 'SvelteKit'
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
	{#each tools as tool (tool.id)}
		<h2 class="mb-2 font-semibold">{tool.name}:</h2>
		<div class="flex gap-2 not-last-of-type:mb-4">
			{#each tool.labels as label (label.id)}
				<div
					class="flex items-center gap-2 rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2"
				>
					<Icon icon={label.icon} class="size-6" />
					{label.name}
				</div>
			{/each}
		</div>
		<hr class="my-4 last:hidden" />
	{/each}
</section>
