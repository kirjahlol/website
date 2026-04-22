<script lang="ts">
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';

	interface Label {
		id: number;
		icon: string;
		name: string;
		content: string;
	}

	async function getPronounsData<T>(): Promise<T> {
		const url = 'https://pronouns.cc/api/v1/users/416264399091130400';

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Fetch failed: ${response.status}`);
		}

		return (await response.json()) as T;
	}

	async function getPronouns(): Promise<string> {
		const data = await getPronounsData<{ pronouns: { pronouns: string; status: string }[] }>();
		const pronouns = data.pronouns
			.map((p) => {
				if (p.status === 'favourite') {
					return p.pronouns;
				}
			})
			.filter(Boolean) // prevent unmapped pronouns from adding extra slashes
			.join('/');
		return pronouns;
	}

	let pronouns = $state('Loading...');
	$effect(() => {
		getPronouns().then((value) => (pronouns = value));
	});

	const labels: Label[] = $derived([
		{
			id: 1,
			icon: 'tabler:tags',
			name: 'Pronouns',
			content: pronouns
		},
		{
			id: 2,
			icon: 'tabler:map-pin',
			name: 'Location',
			content: 'United States'
		}
	]);
</script>

<div class="flex gap-2">
	{#each labels as label (label.id)}
		<div
			class="flex items-center gap-2 rounded-md bg-ctp-green-400/25 p-2 text-ctp-green-400"
			{@attach tooltip(label.name, 'bottom')}
		>
			<Icon icon={label.icon} class="size-6" />
			{label.content}
		</div>
	{/each}
</div>
