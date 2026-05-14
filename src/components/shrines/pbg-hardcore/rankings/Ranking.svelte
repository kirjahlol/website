<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Goal {
		id: number;
		description: string;
	}

	interface Editor {
		id: number;
		href?: string;
		name: string;
	}

	interface Artist {
		id: number;
		href?: string;
		name: string;
		contribution?: string;
	}

	export interface RankingInformation {
		rankingNumber: number;
		hardcoreName: string;
		seriesName: string;
		thumbnail: string;
		game: string;
		goals: Goal[];
		numberOfEpisodes: string;
		editors: Editor[];
		artists: Artist[];
		playlistLink: string;
		synopsis: Snippet;
	}

	let { rankingInformation }: { rankingInformation: RankingInformation } = $props();
</script>

<div class="flex flex-col rounded-md border border-ctp-surface0 bg-ctp-crust p-4">
	<h3 class="mb-2">#{rankingInformation.rankingNumber}</h3>
	<h1 class="text-lg">{rankingInformation.hardcoreName}</h1>
	<h2 class="mb-2 text-ctp-subtext1">{rankingInformation.seriesName}</h2>
	<div class="mb-2 flex justify-center">
		<img
			src={rankingInformation.thumbnail}
			alt="Thumbnail"
			loading="lazy"
			class="max-h-84 w-fit rounded-sm border border-ctp-surface0 object-scale-down"
		/>
	</div>
	<div class="grid grid-cols-3 gap-2">
		<div>
			<h3>Game</h3>
			<span>{rankingInformation.game}</span>
		</div>
		<div>
			{#if rankingInformation.goals.length > 1}
				<h3>Goals</h3>
			{:else}
				<h3>Goal</h3>
			{/if}
			<span>
				{#each rankingInformation.goals as { id, description } (id)}
					<span class="not-last:after:content-[',_']">{description}</span>
				{/each}
			</span>
		</div>
		<div>
			<h3>Number of Episodes</h3>
			<span>{rankingInformation.numberOfEpisodes}</span>
		</div>
		<div>
			{#if rankingInformation.editors.length > 1}
				<h3>Editors</h3>
			{:else}
				<h3>Editor</h3>
			{/if}
			<span>
				{#each rankingInformation.editors as { id, href, name } (id)}
					<span class="not-last:after:content-[',_']">
						{#if href}
							<a {href} rel="external">{name}</a>
						{:else}
							{name}
						{/if}
					</span>
				{/each}
			</span>
		</div>
		<div>
			{#if rankingInformation.artists.length > 1}
				<h3>Artists</h3>
			{:else}
				<h3>Artist</h3>
			{/if}
			<span>
				{#each rankingInformation.artists as { id, href, name, contribution } (id)}
					<span class="not-last:after:content-[',_']">
						{#if href}
							<a {href} rel="external">{name}</a>{#if contribution}<span
									>&nbsp;({contribution})</span
								>{/if}
						{:else}
							{name}{#if contribution}<span>&nbsp;({contribution})</span>{/if}
						{/if}
					</span>
				{/each}
			</span>
		</div>
		<div>
			<h3>Playlist</h3>
			<a href={rankingInformation.playlistLink} rel="external">Link</a>
		</div>
	</div>
	<hr />
	<h3 class="mb-2">Synopsis</h3>
	<rankingInformation.synopsis />
</div>
