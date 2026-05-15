<script lang="ts">
	import astraphobiaThumbnail from '$assets/shrines/pbg-hardcore/rankings/astraphobia-thumbnail.webp';
	import boiledPeanutsMinecraft5Thumbnail from '$assets/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-thumbnail.webp';
	import teamScallopFoulPlayRebirthThumbnail from '$assets/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-thumbnail.webp';
	import Ranking, {
		type RankingInformation
	} from '$components/shrines/pbg-hardcore/rankings/Ranking.svelte';
	import About from '$components/shrines/pbg-hardcore/rankings/about.md';
	import AstraphobiaSynopsis from '$components/shrines/pbg-hardcore/rankings/astraphobia-synopsis.md';
	import BoiledPeanutsMinecraft5Synopsis from '$components/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-synopsis.md';
	import TeamScallopFoulPlayRebirthSynopsis from '$components/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-synopsis.md';

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
					description: 'Defeat the Ender Dragon (innocents)'
				},
				{
					id: 2,
					description: 'Murder every innocent (mafia)'
				}
			],
			numberOfEpisodes: '21',
			editors: [
				{
					id: 1,
					href: 'https://twitter.com/JageRage7',
					name: 'JageRage'
				}
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/JageRage7',
					name: 'JageRage'
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@damickey7334',
					name: 'DaMickey',
					contribution: 'art help'
				},
				{
					id: 3,
					href: 'https://www.youtube.com/@guynewie',
					name: 'GuyFighter',
					contribution: 'original music for trailer/intro and end credits'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PL3_W7xI7JCPLieJCpXiiAnOjurqkEttr5',
			synopsis: BoiledPeanutsMinecraft5Synopsis
		},
		{
			rankingNumber: 2,
			hardcoreName: 'Astraphobia',
			seriesName: 'Astra & Kekspert Mode*',
			thumbnail: astraphobiaThumbnail,
			game: 'Minecraft (Modded)',
			goals: [
				{
					id: 1,
					description: 'Defeat the Wither (Astra)'
				},
				{
					id: 2,
					description: 'Defeat the Netherite Monstrosity (Kekspert Mode)'
				}
			],
			numberOfEpisodes: '16 (including the 2 episodes of Kekspert Mode)',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@WackMaDino',
					name: 'WackMaDino'
				}
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/mikeyswag13',
					name: 'mikeyswag13',
					contribution: 'Astra'
				},
				{
					id: 2,
					name: 'Torin',
					contribution: 'Kekspert Mode'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLpo6UFvrZHBzOiye4z5c-p_QmCg0efMuh',
			synopsis: AstraphobiaSynopsis
		},
		{
			rankingNumber: 3,
			hardcoreName: 'Foul Play Rebirth',
			seriesName: 'Team Scallop',
			thumbnail: teamScallopFoulPlayRebirthThumbnail,
			game: 'Minecraft',
			goals: [
				{
					id: 1,
					description: 'Murder your target'
				},
				{
					id: 2,
					description: 'Defeat the Ender Dragon'
				}
			],
			numberOfEpisodes: '10 (including the Foul Play Remastered fakeout episode)',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@cuubsters',
					name: 'Cuubster (Autumn)'
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@EthanComma',
					name: 'EthanComma'
				}
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/mikeyswag13',
					name: 'mikeyswag13'
				},
				{
					id: 2,
					href: 'https://twitter.com/rosevevoswag',
					name: 'Green',
					contribution: 'end credits'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLzM3BZX6IaAiqha54QGB5oDfePCLLlinS',
			synopsis: TeamScallopFoulPlayRebirthSynopsis
		}
	];
</script>

<section>
	<About />
	<hr />
	<h3>Rankings</h3>
	<div class="flex flex-col gap-4">
		{#each rankings as rankingInformation (rankingInformation.rankingNumber)}
			<Ranking {rankingInformation} />
		{/each}
	</div>
</section>
