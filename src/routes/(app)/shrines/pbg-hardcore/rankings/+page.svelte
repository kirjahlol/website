<script lang="ts">
	import astraphobiaThumbnail from '$assets/shrines/pbg-hardcore/rankings/astraphobia-thumbnail.webp';
	import boiledPeanutsMinecraft5Thumbnail from '$assets/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-thumbnail.webp';
	import bonusHcDetonation2Thumbnail from '$assets/shrines/pbg-hardcore/rankings/bonus-hc-detonation-2-thumbnail.webp';
	import ncicoreTerrariaCalamityThumbnail from '$assets/shrines/pbg-hardcore/rankings/ncicore-terraria-calamity-thumbnail.webp';
	import teamScallopFoulPlayRebirthThumbnail from '$assets/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-thumbnail.webp';
	import Ranking, {
		type RankingInformation
	} from '$components/shrines/pbg-hardcore/rankings/Ranking.svelte';
	import About from '$components/shrines/pbg-hardcore/rankings/about.md';
	import AstraphobiaSynopsis from '$components/shrines/pbg-hardcore/rankings/astraphobia-synopsis.md';
	import BoiledPeanutsMinecraft5Synopsis from '$components/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-synopsis.md';
	import BonusHCDetonation2Synopsis from '$components/shrines/pbg-hardcore/rankings/bonus-hc-detonation-2-synopsis.md';
	import NCICORETerrariaCalamitySynopsis from '$components/shrines/pbg-hardcore/rankings/ncicore-terraria-calamity-synopsis.md';
	import TeamScallopFoulPlayRebirthSynopsis from '$components/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-synopsis.md';

	const top5Hardcores: RankingInformation[] = [
		{
			rankingNumber: 1,
			hardcoreName: 'Minecraft #5',
			yearOfRelease: 2021,
			seriesName: "Boiled Peanuts' Hardcore series",
			thumbnail: boiledPeanutsMinecraft5Thumbnail,
			game: '<i>Minecraft</i> (modded)',
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
			Synopsis: BoiledPeanutsMinecraft5Synopsis
		},
		{
			rankingNumber: 2,
			hardcoreName: 'Astraphobia',
			yearOfRelease: 2023,
			seriesName: '<i>Astra<i/> & <i>Kekspert Mode</i>*',
			thumbnail: astraphobiaThumbnail,
			game: '<i>Minecraft</i> (modded)',
			goals: [
				{
					id: 1,
					description: 'Defeat the Wither (<i>Astra</i>)'
				},
				{
					id: 2,
					description: 'Defeat the Netherite Monstrosity (<i>Kekspert Mode</i>)'
				}
			],
			numberOfEpisodes: '16 (including the 2 episodes of <i>Kekspert Mode</i>)',
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
					contribution: '<i>Astra</i>'
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@toerin',
					name: 'Torin',
					contribution: '<i>Kekspert Mode</i>'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLpo6UFvrZHBzOiye4z5c-p_QmCg0efMuh',
			Synopsis: AstraphobiaSynopsis
		},
		{
			rankingNumber: 3,
			hardcoreName: 'Foul Play Rebirth',
			yearOfRelease: 2026,
			seriesName: '<i>Team Scallop</i>',
			thumbnail: teamScallopFoulPlayRebirthThumbnail,
			game: '<i>Minecraft</i>',
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
			numberOfEpisodes: '10 (including the <i>Foul Play Remastered</i> fakeout episode)',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@cuubsters',
					name: 'Cuubster/Autumn'
				},
				{
					id: 2,
					href: 'https://twitter.com/ethancomma',
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
			Synopsis: TeamScallopFoulPlayRebirthSynopsis
		},
		{
			rankingNumber: 4,
			hardcoreName: 'Terraria Calamity',
			yearOfRelease: 2024,
			seriesName: '<i>NCICORE</i>',
			thumbnail: ncicoreTerrariaCalamityThumbnail,
			game: '<i>Terraria</i> (<i>Calamity Mod)</i>',
			goals: [
				{
					id: 1,
					description: 'Defeat the Leviathan and Anahita'
				}
			],
			numberOfEpisodes: '26',
			editors: [
				{
					id: 1,
					href: 'https://twitter.com/drewofdcc',
					name: 'DrewOfDC'
				},
				{
					id: 2,
					href: 'https://twitter.com/ethancomma',
					name: 'EthanComma'
				}
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/drewofdcc',
					name: 'DrewOfDC'
				},
				{
					id: 2,
					href: 'https://twitter.com/RossHasDied',
					name: 'Rosswell',
					contribution: 'some portrait sketches'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLYV4bNrm15VytThxFmfLXnEoC08rL1Ve0',
			Synopsis: NCICORETerrariaCalamitySynopsis
		},
		{
			rankingNumber: 5,
			hardcoreName: 'Detonation 2',
			yearOfRelease: 2022,
			seriesName: '<i>Bonus HC</i>',
			thumbnail: bonusHcDetonation2Thumbnail,
			game: '<i>Minecraft</i> (modded)',
			goals: [
				{
					id: 1,
					description: 'Defeat the Ender Dragon'
				}
			],
			numberOfEpisodes: '12',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@nappy3swag',
					name: 'Nappy3'
				}
			],
			artists: [
				{
					id: 1,
					href: 'https://www.youtube.com/@nappy3swag',
					name: 'Nappy3'
				}
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLj1dh7kyhfUk45Ry_3d15xYNxfUKwb7eL',
			Synopsis: BonusHCDetonation2Synopsis
		}
	];
</script>

<section>
	<About />
	<hr />
	<h3>Top 5 Hardcores</h3>
	<div class="flex flex-col gap-4">
		{#each top5Hardcores as rankingInformation (rankingInformation.rankingNumber)}
			<Ranking {rankingInformation} />
		{/each}
	</div>
</section>
