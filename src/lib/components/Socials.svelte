<script lang="ts">
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';

	interface Social {
		href: string;
		name: string;
		icon: string;
	}

	const socials: Social[] = [
		{
			href: 'https://github.com/kirjahlol',
			name: 'GitHub',
			icon: 'tabler:brand-github'
		},
		{
			href: 'https://bsky.app/profile/kirjah.lol',
			name: 'Bluesky',
			icon: 'tabler:brand-bluesky'
		},
		{
			href: 'https://twitter.com/kirjahlol',
			name: 'Twitter',
			icon: 'tabler:brand-twitter'
		},
		{
			href: 'https://www.reddit.com/user/kirjahlol/',
			name: 'Reddit',
			icon: 'tabler:brand-reddit'
		},
		{
			href: 'https://www.youtube.com/@kirjahlol',
			name: 'YouTube',
			icon: 'tabler:brand-youtube'
		},
		{
			href: 'https://www.twitch.tv/kirjahlol',
			name: 'Twitch',
			icon: 'tabler:brand-twitch'
		},
		{
			href: 'https://open.spotify.com/user/31zrxefog5wdzykdwqlqwul4nkdu',
			name: 'Spotify',
			icon: 'tabler:brand-spotify'
		},
		{
			href: 'https://www.last.fm/user/kirjahri',
			name: 'Last.fm',
			icon: 'tabler:brand-lastfm'
		}
	];
</script>

<section class="">
	<h3>Socials</h3>
	<div class="grid grid-cols-4 gap-2">
		{#each socials as { href, name, icon }, i (i)}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				{href}
				target="_blank"
				class="flex justify-center rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2 text-ctp-text!"
				{@attach tooltip(name, 'bottom')}
			>
				<Icon {icon} class="size-6" />
			</a>
		{/each}
	</div>
</section>
