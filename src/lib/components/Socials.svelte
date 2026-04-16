<script lang="ts">
	import { tooltip } from '$lib';
	import {
		IconBrandBluesky,
		IconBrandGithub,
		IconBrandLastfm,
		IconBrandReddit,
		IconBrandSpotify,
		IconBrandTwitch,
		IconBrandTwitter,
		IconBrandYoutube,
		type Icon
	} from '@tabler/icons-svelte';

	interface Social {
		id: number;
		SocialIcon: Icon;
		href: string;
		name: string;
	}

	const socials: Social[] = [
		{
			id: 1,
			SocialIcon: IconBrandGithub,
			href: 'https://github.com/kirjahlol',
			name: 'GitHub'
		},
		{
			id: 2,
			SocialIcon: IconBrandBluesky,
			href: 'https://bsky.app/profile/kirjah.lol',
			name: 'Bluesky'
		},
		{
			id: 3,
			SocialIcon: IconBrandTwitter,
			href: 'https://twitter.com/kirjahlol',
			name: 'Twitter'
		},
		{
			id: 4,
			SocialIcon: IconBrandReddit,
			href: 'https://www.reddit.com/user/kirjahlol/',
			name: 'Reddit'
		},
		{
			id: 5,
			SocialIcon: IconBrandYoutube,
			href: 'https://www.youtube.com/@kirjahlol',
			name: 'YouTube'
		},
		{
			id: 6,
			SocialIcon: IconBrandTwitch,
			href: 'https://www.twitch.tv/kirjahlol',
			name: 'Twitch'
		},
		{
			id: 7,
			SocialIcon: IconBrandSpotify,
			href: 'https://open.spotify.com/user/31zrxefog5wdzykdwqlqwul4nkdu',
			name: 'Spotify'
		},
		{
			id: 8,
			SocialIcon: IconBrandLastfm,
			href: 'https://www.last.fm/user/kirjahri',
			name: 'Last.fm'
		}
	];
</script>

<section class="">
	<h3>Socials</h3>
	<div class="grid grid-cols-4 gap-2">
		{#each socials as social (social.id)}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={social.href}
				target="_blank"
				class="flex justify-center rounded-md border border-ctp-surface0 bg-ctp-surface0/50 py-1 text-ctp-text!"
				{@attach tooltip(social.name, 'bottom')}
			>
				<social.SocialIcon />
			</a>
		{/each}
	</div>
</section>
