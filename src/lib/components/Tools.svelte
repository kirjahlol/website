<script lang="ts">
	import {
		IconBrandSvelte,
		IconBrandTypescript,
		IconBrandVscode,
		IconLetterL,
		IconLetterN,
		type Icon
	} from '@tabler/icons-svelte';

	interface ToolLabel {
		id: number;
		ToolLabelIcon: Icon;
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
					ToolLabelIcon: IconLetterN,
					name: 'Neovim'
				},
				{
					id: 2,
					ToolLabelIcon: IconBrandVscode,
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
					ToolLabelIcon: IconBrandTypescript,
					name: 'TypeScript'
				},
				{
					id: 2,
					ToolLabelIcon: IconBrandSvelte,
					name: 'Svelte'
				},
				{
					id: 3,
					ToolLabelIcon: IconLetterL,
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
					ToolLabelIcon: IconBrandSvelte,
					name: 'SvelteKit'
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
				<div class="flex gap-2 rounded-md border border-ctp-surface0 bg-ctp-surface0/50 px-2 py-1">
					<label.ToolLabelIcon />
					{label.name}
				</div>
			{/each}
		</div>
		<hr class="my-4 last:hidden" />
	{/each}
</section>
