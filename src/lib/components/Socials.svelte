<script lang="ts">
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';

	interface Social {
		id: number;
		icon: string;
		href: string;
		name: string;
	}

	const socials: Social[] = [
		{
			id: 1,
			icon: 'tabler:brand-github',
			href: 'https://github.com/kirjahlol',
			name: 'GitHub'
		},
		{
			id: 2,
			icon: 'tabler:brand-bluesky',
			href: 'https://bsky.app/profile/kirjah.lol',
			name: 'Bluesky'
		},
		{
			id: 3,
			icon: 'tabler:brand-twitter',
			href: 'https://twitter.com/kirjahlol',
			name: 'Twitter'
		},
		{
			id: 4,
			icon: 'tabler:brand-reddit',
			href: 'https://www.reddit.com/user/kirjahlol/',
			name: 'Reddit'
		},
		{
			id: 5,
			icon: 'tabler:brand-youtube',
			href: 'https://www.youtube.com/@kirjahlol',
			name: 'YouTube'
		},
		{
			id: 6,
			icon: 'tabler:brand-twitch',
			href: 'https://www.twitch.tv/kirjahlol',
			name: 'Twitch'
		},
		{
			id: 7,
			icon: 'tabler:brand-spotify',
			href: 'https://open.spotify.com/user/31zrxefog5wdzykdwqlqwul4nkdu',
			name: 'Spotify'
		},
		{
			id: 8,
			icon: 'tabler:brand-lastfm',
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
				class="flex justify-center rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2 text-ctp-text!"
				{@attach tooltip(social.name, 'bottom')}
			>
				<Icon icon={social.icon} class="size-6" />
			</a>
		{/each}
	</div>
</section>
