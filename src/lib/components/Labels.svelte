<script lang="ts">
	import { tooltip } from '$lib';
	import { IconMapPin, IconUser, type Icon } from '@tabler/icons-svelte';

	interface Label {
		id: number;
		LabelIcon: Icon;
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
	getPronouns().then((value) => (pronouns = value));

	const labels: Label[] = $derived([
		{
			id: 1,
			LabelIcon: IconUser,
			name: 'Pronouns',
			content: pronouns
		},
		{
			id: 2,
			LabelIcon: IconMapPin,
			name: 'Location',
			content: 'United States'
		}
	]);
</script>

<div class="flex gap-2">
	{#each labels as label (label.id)}
		<div
			class="flex gap-2 rounded-md bg-ctp-green-400/25 px-2 py-1 text-ctp-green-400"
			{@attach tooltip(label.name, 'bottom')}
		>
			<label.LabelIcon />
			{label.content}
		</div>
	{/each}
</div>
