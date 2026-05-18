<script lang="ts">
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';

	interface Social {
		id: number;
		href: string;
		name: string;
		icon: string;
	}

	const socials: Social[] = [
		{
			id: 1,
			href: 'https://github.com/kirjahlol',
			name: 'GitHub',
			icon: 'tabler:brand-github'
		},
		{
			id: 2,
			href: 'https://bsky.app/profile/kirjah.lol',
			name: 'Bluesky',
			icon: 'tabler:brand-bluesky'
		},
		{
			id: 3,
			href: 'https://twitter.com/kirjahlol',
			name: 'Twitter',
			icon: 'tabler:brand-twitter'
		},
		{
			id: 4,
			href: 'https://www.reddit.com/user/kirjahlol/',
			name: 'Reddit',
			icon: 'tabler:brand-reddit'
		},
		{
			id: 5,
			href: 'https://www.youtube.com/@kirjahlol',
			name: 'YouTube',
			icon: 'tabler:brand-youtube'
		},
		{
			id: 6,
			href: 'https://www.twitch.tv/kirjahlol',
			name: 'Twitch',
			icon: 'tabler:brand-twitch'
		},
		{
			id: 7,
			href: 'https://open.spotify.com/user/31zrxefog5wdzykdwqlqwul4nkdu',
			name: 'Spotify',
			icon: 'tabler:brand-spotify'
		},
		{
			id: 8,
			href: 'https://www.last.fm/user/kirjahri',
			name: 'Last.fm',
			icon: 'tabler:brand-lastfm'
		}
	];
</script>

<section class="">
	<h3>Socials</h3>
	<div class="flex flex-wrap justify-center gap-2">
		{#each socials as { id, href, name, icon } (id)}
			<a
				{href}
				rel="external"
				class="rounded-md border border-ctp-surface0 bg-ctp-surface0/50 p-2 text-ctp-text! transition-[scale] duration-150 hover:scale-110"
				{@attach tooltip(name, 'bottom')}
			>
				<Icon {icon} class="size-6" />
			</a>
		{/each}
	</div>
</section>
