<script lang="ts">
	import boiledPeanutsMinecraft5Thumbnail from '$assets/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5.webp';
	import Ranking, {
		type RankingInformation
	} from '$components/shrines/pbg-hardcore/rankings/Ranking.svelte';
	import About from '$components/shrines/pbg-hardcore/rankings/about.md';
	import BoiledPeanutsMinecraft5Synopsis from '$components/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-synopsis.md';

	const rankings: RankingInformation[] = [
		{
			rankingNumber: 1,
			hardcoreName: 'Minecraft #5',
			seriesName: "Boiled Peanuts' Hardcore series",
			thumbnail: boiledPeanutsMinecraft5Thumbnail,
			game: 'Minecraft (Modded)',
			goals: [
				{
					id: 1,
					description: 'Slay the Ender Dragon (Innocents)'
				},
				{
					id: 2,
					description: 'Murder every innocent (Mafia)'
				}
			],
			numberOfEpisodes: 21,
			editors: [
				{
					id: 1,
					name: 'JageRage',
					href: 'https://x.com/JageRage7'
				}
			],
			artists: [
				{
					id: 1,
					name: 'JageRage',
					href: 'https://x.com/JageRage7'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PL3_W7xI7JCPLieJCpXiiAnOjurqkEttr5',
			synopsis: BoiledPeanutsMinecraft5Synopsis
		}
	];
</script>

<section>
	<About />
	<hr />
	<h3>Rankings</h3>
	{#each rankings as rankingInformation (rankingInformation.rankingNumber)}
		<Ranking {rankingInformation} />
	{/each}
</section>
