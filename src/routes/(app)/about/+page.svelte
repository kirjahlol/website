<script lang="ts">
	import ProfileCard, { type ProfileCardItem } from '$components/about/ProfileCard.svelte';
	import { age, pronouns } from '$lib';

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
</section>
