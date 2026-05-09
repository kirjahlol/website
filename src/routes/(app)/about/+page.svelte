<script lang="ts">
	import ProfileCard, { type ProfileCardItem } from '$components/global/ProfileCard.svelte';
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
	<ProfileCard items={profileCardItems} />
</section>
