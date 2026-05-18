<script lang="ts">
	import Age from '$components/home/Age.svelte';
	import Labels, { type Label } from '$components/home/Labels.svelte';
	import { location, pronouns } from '$lib';

	// async function getPronounsData<T>(): Promise<T> {
	// 	const url = 'https://pronouns.cc/api/v1/users/416264399091130400';
	//
	// 	const response = await fetch(url);
	// 	if (!response.ok) {
	// 		throw new Error(`Fetch failed: ${response.status}`);
	// 	}
	//
	// 	return (await response.json()) as T;
	// }

	// async function getPronouns(): Promise<string> {
	// 	const data = await getPronounsData<{ pronouns: { pronouns: string; status: string }[] }>();
	// 	const pronouns = data.pronouns
	// 		.map((p) => {
	// 			if (p.status === 'favourite') {
	// 				return p.pronouns;
	// 			}
	// 		})
	// 		.filter(Boolean) // prevent non-favorite pronouns from adding extra slashes
	// 		.join('/');
	// 	return pronouns;
	// }

	// let pronouns = $state('Loading...');
	// $effect(() => {
	// 	getPronouns().then((value) => (pronouns = value));
	// });

	const labels: Label[] = [
		{
			id: 1,
			name: 'Pronouns',
			icon: 'tabler:tags',
			content: pronouns
		},
		{
			id: 2,
			name: 'Location',
			icon: 'tabler:map-pin',
			content: location
		}
	];
</script>

<section>
	<h3>Welcome</h3>
	<p>
		Hello, and welcome to my website! I am the webmaster, <span class="font-semibold text-ctp-green"
			>kirjah</span
		>
		<span class="text-sm text-ctp-subtext0">(KUR-jah)</span>, <Age />-year-old self-taught
		programmer. Take a look around!
	</p>
	<Labels {labels} />
</section>
