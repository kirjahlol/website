<script lang="ts">
	import GameCollection, {
		type OtherGames,
		type SteamGames
	} from '$components/about/GameCollection.svelte';
	import ProfileCard, { type ProfileCardItem } from '$components/about/ProfileCard.svelte';
	import { age, pronouns, tooltip } from '$lib';
	import type { PageProps } from './$types';

	let profileCardItems: ProfileCardItem[] = [
		{
			id: 1,
			name: 'Age',
			content: `${age}`
		},
		{
			id: 2,
			name: 'Pronouns',
			content: `${pronouns}`
		},
		{
			id: 3,
			name: 'Address',
			styles: 'blur-sm',
			content: '123 Fake St.'
		}
	];

	let steamGames: SteamGames[] = [
		{
			id: 1,
			isFavorite: true,
			appId: 105600,
			name: 'Terraria'
		},
		{
			id: 2,
			appId: 413150,
			name: 'Stardew Valley'
		},
		{
			id: 3,
			appId: 504230,
			name: 'Celeste'
		},
		{
			id: 4,
			appId: 391540,
			name: 'UNDERTALE'
		},
		{
			id: 5,
			appId: 1671210,
			name: 'DELTARUNE'
		},
		{
			id: 6,
			appId: 367520,
			name: 'Hollow Knight'
		},
		{
			id: 7,
			appId: 322170,
			name: 'Geometry Dash'
		},
		{
			id: 8,
			appId: 960090,
			name: 'Bloons TD 6'
		},
		{
			id: 9,
			appId: 2379780,
			name: 'Balatro'
		},
		{
			id: 10,
			appId: 567640,
			name: 'Danganronpa V3: Killing Harmony'
		}
	];

	let { data }: PageProps = $props();

	const otherGames: OtherGames[] = $derived([
		{
			id: 1,
			isFavorite: true,
			href: 'https://www.nintendo.com/us/store/products/mario-kart-world-switch-2/',
			imageSource: data.gameCovers[0],
			name: 'Mario Kart World'
		}
	]);
</script>

<section>
	<div class="flex flex-col items-center gap-2 sm:flex-row">
		<ProfileCard items={profileCardItems} />
		<div>
			<h3>Bio</h3>
			<p>
				Hi! My name is <span class="font-semibold text-ctp-green-400">kirjah</span>. I'm a
				self-taught programmer.
			</p>
			<p>
				Some of my hobbies are coding things, listening to and (sometimes) producing music, drawing
				digitally (you can find my art on Twitter), and playing in the
				<a href="https://lounge.mkcentral.com/mkworld" target="_blank"
					>competitive Mario Kart World Lounge</a
				>
				(you can find my stats
				<a
					href="https://lounge.mkcentral.com/mkworld/PlayerDetails/79021?season=2&p=12"
					target="_blank">here</a
				>).
			</p>
		</div>
	</div>
	<hr />
	<div>
		<h3>Game Collection</h3>
		<GameCollection {steamGames} {otherGames} />
	</div>
</section>
<section>
	<h3>Motivations for Creating Website</h3>
	<p>
		I just think that having a website that you can do anything with is fun and cool <span
			class="text-sm text-ctp-subtext0"
			>(and I guess rejecting modern social media is a bonus or whatever)</span
		>. That's about it!
	</p>
	<hr />
	<h3>Website Infrastructure</h3>
	<p>
		This website was built using <a href="https://svelte.dev/docs/kit/introduction" target="_blank"
			>SvelteKit</a
		>
		and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. It uses the
		<a
			href="https://catppuccin.com/"
			target="_blank"
			class="bg-linear-to-r from-ctp-peach-400 to-ctp-mauve-400 bg-clip-text text-transparent!"
			>Catppuccin</a
		>
		color theme and <a href="https://iconify.design/" target="_blank">Iconify</a> for working with
		icons. The tooltips that appear when certan elements are hovered over (like
		<span class="underline decoration-dotted" {@attach tooltip("I'm a Tippy.js tooltip!", 'bottom')}
			>this one</span
		>) were made using the
		<a href="https://atomiks.github.io/tippyjs/" target="_blank">Tippy.js</a>
		library. This site is hosted on
		<a
			href="https://docs.github.com/en/pages"
			target="_blank"
			{@attach tooltip('<code>kirjah.lol</code>', 'bottom')}>GitHub Pages</a
		>,
		<a
			href="https://neocities.org/"
			target="_blank"
			{@attach tooltip('<code>kirjah.neocities.org</code>', 'bottom')}>Neocities</a
		>, and
		<a
			href="https://nekoweb.org/"
			target="_blank"
			{@attach tooltip('<code>kirjah.nekoweb.org</code>', 'bottom')}>Nekoweb</a
		>.
	</p>
</section>
