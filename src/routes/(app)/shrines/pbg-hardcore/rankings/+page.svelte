<script lang="ts">
	import amberKMinecraftSecretRivalsThumbnail from '$assets/shrines/pbg-hardcore/rankings/amber-k-minecraft-secret-rivals-thumbnail.webp';
	import astraHarbingerThumbnail from '$assets/shrines/pbg-hardcore/rankings/astra-harbinger-thumbnail.webp';
	import astraphobiaThumbnail from '$assets/shrines/pbg-hardcore/rankings/astraphobia-thumbnail.webp';
	import boiledPeanutsMinecraft5Thumbnail from '$assets/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-thumbnail.webp';
	import bonusHcDetonation2Thumbnail from '$assets/shrines/pbg-hardcore/rankings/bonus-hc-detonation-2-thumbnail.webp';
	import crookedHcCoronaSiegeThumbnail from '$assets/shrines/pbg-hardcore/rankings/crooked-hc-corona-siege-thumbnail.webp';
	import elementcorePrimalEssenceThumbnail from '$assets/shrines/pbg-hardcore/rankings/elementcore-primal-essence-thumbnail.webp';
	import ennuiHcMajorityVoteThumbnail from '$assets/shrines/pbg-hardcore/rankings/ennui-hc-majority-vote-thumbnail.webp';
	import ncicoreTerrariaCalamityThumbnail from '$assets/shrines/pbg-hardcore/rankings/ncicore-terraria-calamity-thumbnail.webp';
	import pbgMinecraft5Thumbnail from '$assets/shrines/pbg-hardcore/rankings/pbg-minecraft-5-thumbnail.webp';
	import pupzelHardcoreThumbnail from '$assets/shrines/pbg-hardcore/rankings/pupzel-hardcore-thumbnail.webp';
	import superEpicoreThumbnail from '$assets/shrines/pbg-hardcore/rankings/super-epicore-thumbnail.webp';
	import teamScallopFoulPlayRebirthThumbnail from '$assets/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-thumbnail.webp';
	import teamScallopTheCitadelOfDoomThumbnail from '$assets/shrines/pbg-hardcore/rankings/team-scallop-the-citadel-of-doom-thumbnail.webp';
	import veryBigCoreThumbnail from '$assets/shrines/pbg-hardcore/rankings/very-big-core-thumbnail.webp';
	import Ranking, {
		type RankingInformation,
	} from '$components/shrines/pbg-hardcore/rankings/Ranking.svelte';
	import About from '$components/shrines/pbg-hardcore/rankings/about.md';
	import AmberKMinecraftSecretRivalsSynopsis from '$components/shrines/pbg-hardcore/rankings/amber-k-minecraft-secret-rivals-synopsis.md';
	import AstraHarbingerSynopsis from '$components/shrines/pbg-hardcore/rankings/astra-harbinger-synopsis.md';
	import AstraphobiaSynopsis from '$components/shrines/pbg-hardcore/rankings/astraphobia-synopsis.md';
	import BoiledPeanutsMinecraft5Synopsis from '$components/shrines/pbg-hardcore/rankings/boiled-peanuts-minecraft-5-synopsis.md';
	import BonusHCDetonation2Synopsis from '$components/shrines/pbg-hardcore/rankings/bonus-hc-detonation-2-synopsis.md';
	import CrookedHCCoronaSiegeSynopsis from '$components/shrines/pbg-hardcore/rankings/crooked-hc-corona-siege-synopsis.md';
	import ElementcorePrimalEssenceSynopsis from '$components/shrines/pbg-hardcore/rankings/elementcore-primal-essence-synopsis.md';
	import EnnuiHCMajorityVoteSynopsis from '$components/shrines/pbg-hardcore/rankings/ennui-hc-majority-vote-synopsis.md';
	import NCICORETerrariaCalamitySynopsis from '$components/shrines/pbg-hardcore/rankings/ncicore-terraria-calamity-synopsis.md';
	import PBGMinecraft5Synopsis from '$components/shrines/pbg-hardcore/rankings/pbg-minecraft-5-synopsis.md';
	import PupzelHardcoreSynopsis from '$components/shrines/pbg-hardcore/rankings/pupzel-hardcore-synopsis.md';
	import SuperEpicoreSynopsis from '$components/shrines/pbg-hardcore/rankings/super-epicore-synopsis.md';
	import TeamScallopFoulPlayRebirthSynopsis from '$components/shrines/pbg-hardcore/rankings/team-scallop-foul-play-rebirth-synopsis.md';
	import TeamScallopTheCitadelOfDoomSynopsis from '$components/shrines/pbg-hardcore/rankings/team-scallop-the-citadel-of-doom-synopsis.md';
	import VeryBigCoreSynopsis from '$components/shrines/pbg-hardcore/rankings/very-big-core-synopsis.md';

	const top10Hardcores: RankingInformation[] = [
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
					description: 'Defeat the Ender Dragon (innocents)',
				},
				{
					id: 2,
					description: 'Murder every innocent (mafia)',
				},
			],
			numberOfEpisodes: '21',
			editors: [
				{
					id: 1,
					href: 'https://twitter.com/JageRage7',
					name: 'JageRage',
				},
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/JageRage7',
					name: 'JageRage',
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@damickey7334',
					name: 'DaMickey',
					contribution: 'art help',
				},
				{
					id: 3,
					href: 'https://www.youtube.com/@guynewie',
					name: 'GuyFighter',
					contribution: 'original music for trailer/intro and end credits',
				},
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PL3_W7xI7JCPLieJCpXiiAnOjurqkEttr5',
			synopsis: BoiledPeanutsMinecraft5Synopsis,
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
					description: 'Defeat the Wither (<i>Astra</i>)',
				},
				{
					id: 2,
					description: 'Defeat the Netherite Monstrosity (<i>Kekspert Mode</i>)',
				},
			],
			numberOfEpisodes: '16 (including the 2 episodes of <i>Kekspert Mode</i>)',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@WackMaDino',
					name: 'WackMaDino',
				},
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/mikeyswag13',
					name: 'mikeyswag13',
					contribution: '<i>Astra</i>',
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@toerin',
					name: 'Torin',
					contribution: '<i>Kekspert Mode</i>',
				},
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLpo6UFvrZHBzOiye4z5c-p_QmCg0efMuh',
			synopsis: AstraphobiaSynopsis,
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
					description: 'Murder your target',
				},
				{
					id: 2,
					description: 'Defeat the Ender Dragon',
				},
			],
			numberOfEpisodes: '10 (including the <i>Foul Play Remastered</i> fakeout episode)',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@cuubsters',
					name: 'Cuubster/Autumn',
				},
				{
					id: 2,
					href: 'https://twitter.com/ethancomma',
					name: 'EthanComma',
				},
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/mikeyswag13',
					name: 'mikeyswag13',
				},
				{
					id: 2,
					href: 'https://twitter.com/rosevevoswag',
					name: 'Green',
					contribution: 'end credits',
				},
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLzM3BZX6IaAiqha54QGB5oDfePCLLlinS',
			synopsis: TeamScallopFoulPlayRebirthSynopsis,
		},
		{
			rankingNumber: 4,
			hardcoreName: 'Terraria Calamity',
			yearOfRelease: 2024,
			seriesName: '<i>NCICORE</i>',
			thumbnail: ncicoreTerrariaCalamityThumbnail,
			game: '<i>Terraria</i> (<i>Calamity Mod</i>)',
			goals: [
				{
					id: 1,
					description: 'Defeat the Leviathan and Anahita',
				},
			],
			numberOfEpisodes: '26',
			editors: [
				{
					id: 1,
					href: 'https://twitter.com/drewofdcc',
					name: 'DrewOfDC',
				},
				{
					id: 2,
					href: 'https://twitter.com/ethancomma',
					name: 'EthanComma',
				},
			],
			artists: [
				{
					id: 1,
					href: 'https://twitter.com/drewofdcc',
					name: 'DrewOfDC',
				},
				{
					id: 2,
					href: 'https://twitter.com/RossHasDied',
					name: 'Rosswell',
					contribution: 'some portrait sketches',
				},
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLYV4bNrm15VytThxFmfLXnEoC08rL1Ve0',
			synopsis: NCICORETerrariaCalamitySynopsis,
		},
		{
			rankingNumber: 5,
			hardcoreName: 'Corona Siege',
			yearOfRelease: 2025,
			seriesName: '<i>Crooked HC</i>',
			thumbnail: crookedHcCoronaSiegeThumbnail,
			game: '<i>Minecraft</i> CTM (Corona Trials)',
			goals: [
				{
					id: 1,
					description: 'Complete the monument by collecting all 16 wools',
				},
			],
			numberOfEpisodes: '13',
			editors: [
				{
					id: 1,
					href: 'https://www.youtube.com/@Crookadook/videos',
					name: 'ClaireBerry',
				},
				{
					id: 2,
					href: 'https://www.youtube.com/@trickynicky6402',
					name: 'Tricky Nicky',
					contribution: 'Arc 2 intro',
				},
			],
			artists: [
				{
					id: 1,
					href: 'https://www.youtube.com/@JackP821/videos',
					name: 'JackP',
				},
			],
			playlistLink: 'https://www.youtube.com/playlist?list=PLjXTBO57zws8ULpJm4Pjp87KWeH-cvWrZ',
			synopsis: CrookedHCCoronaSiegeSynopsis,
		},
		// {
		// 	rankingNumber: 6,
		// 	hardcoreName: 'Detonation 2',
		// 	yearOfRelease: 2022,
		// 	seriesName: '<i>Bonus HC</i>',
		// 	thumbnail: bonusHcDetonation2Thumbnail,
		// 	game: '<i>Minecraft</i> (modded)',
		// 	goals: [
		// 		{
		// 			id: 1,
		// 			description: 'Defeat the Ender Dragon',
		// 		},
		// 	],
		// 	numberOfEpisodes: '12',
		// 	editors: [
		// 		{
		// 			id: 1,
		// 			href: 'https://www.youtube.com/@nappy3swag',
		// 			name: 'Nappy3',
		// 		},
		// 	],
		// 	artists: [
		// 		{
		// 			id: 1,
		// 			href: 'https://www.youtube.com/@nappy3swag',
		// 			name: 'Nappy3',
		// 		},
		// 	],
		// 	playlistLink: 'https://www.youtube.com/playlist?list=PLj1dh7kyhfUk45Ry_3d15xYNxfUKwb7eL',
		// 	synopsis: BonusHCDetonation2Synopsis,
		// },
		// {
		// 	rankingNumber: 7,
		// 	hardcoreName: 'Majority Vote',
		// 	yearOfRelease: 2024,
		// 	seriesName: '<i>Ennui HC</i>',
		// 	thumbnail: ennuiHcMajorityVoteThumbnail,
		// 	game: '<i>Minecraft</i> (modded)',
		// 	goals: [
		// 		{
		// 			id: 1,
		// 			description: 'Collect the 3 Dungeon Cores in order to summon the Sanctum Keeper',
		// 		},
		// 		{
		// 			id: 2,
		// 			description: 'Defeat the Sanctum Keeper',
		// 		},
		// 		{
		// 			id: 3,
		// 			description:
		// 				'Ensure that the total number of hearts among all alive players is no more than 20 before entering the End',
		// 		},
		// 		{
		// 			id: 4,
		// 			description: 'Defeat the Ultra Wither',
		// 		},
		// 	],
		// 	numberOfEpisodes: '11',
		// 	editors: [
		// 		{
		// 			id: 1,
		// 			href: 'https://www.youtube.com/channel/UCTnsQosDb_WqISMb0h7TIkw',
		// 			name: 'WonderfulToll',
		// 		},
		// 	],
		// 	artists: [
		// 		{
		// 			id: 1,
		// 			href: 'https://www.youtube.com/channel/UCTnsQosDb_WqISMb0h7TIkw',
		// 			name: 'WonderfulToll',
		// 		},
		// 	],
		// 	playlistLink: 'https://www.youtube.com/playlist?list=PLj1dh7kyhfUk45Ry_3d15xYNxfUKwb7eL',
		// 	synopsis: BonusHCDetonation2Synopsis,
		// },
	];
</script>

<section>
	<About />
	<hr />
	<h3>Top 10 Hardcores</h3>
	<div class="flex flex-col gap-4">
		{#each top10Hardcores as rankingInformation (rankingInformation.rankingNumber)}
			<Ranking {rankingInformation} />
		{/each}
	</div>
</section>
