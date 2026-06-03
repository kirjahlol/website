<script lang="ts">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	interface Goal {
		id: number;
		description: string;
	}

	interface Contributor {
		id: number;
		href?: string;
		name: string;
		contribution?: string;
	}

	export interface RankingInformation {
		rankingNumber: number;
		hardcoreName: string;
		yearOfRelease: number;
		seriesName: string;
		thumbnail: string;
		game: string;
		goals: Goal[];
		numberOfEpisodes: string;
		editors: Contributor[];
		artists: Contributor[];
		playlistLink: string;
		synopsis: Snippet;
	}

	let { rankingInformation }: { rankingInformation: RankingInformation } = $props();
</script>

{#if browser}
	<div class="flex flex-col rounded-md border border-ctp-surface0 bg-ctp-crust p-4">
		<h3 class="mb-2">#{rankingInformation.rankingNumber}</h3>
		<h1 class="mb-2 text-lg">
			<span class="italic">
				{rankingInformation.hardcoreName}
			</span>
			<span class="text-ctp-subtext1">({rankingInformation.yearOfRelease})</span>
		</h1>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<h2 class="mb-2 text-ctp-subtext1">{@html rankingInformation.seriesName}</h2>
		<img
			src={rankingInformation.thumbnail}
			alt="Thumbnail"
			loading="lazy"
			class="mb-2 rounded-sm border border-ctp-surface0"
		/>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
			<div>
				<h3>Game</h3>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span>{@html rankingInformation.game}</span>
			</div>
			<div>
				{#if rankingInformation.goals.length > 1}
					<h3>Goals</h3>
				{:else}
					<h3>Goal</h3>
				{/if}
				<span>
					{#if rankingInformation.goals.length > 1}
						<ol class="list-inside list-decimal">
							{#each rankingInformation.goals as { id, description } (id)}
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								<li>{@html description}</li>
							{/each}
						</ol>
					{:else}
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<span>{@html rankingInformation.goals[0].description}</span>
					{/if}
				</span>
			</div>
			<div>
				<h3>Number of Episodes</h3>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span>{@html rankingInformation.numberOfEpisodes}</span>
			</div>
			<div>
				{#if rankingInformation.editors.length > 1}
					<h3>Editors</h3>
				{:else}
					<h3>Editor</h3>
				{/if}
				<span class="flex flex-wrap gap-x-1">
					{#each rankingInformation.editors as { id, href, name, contribution } (id)}
						<span class="not-last:after:content-[',']">
							{#if href}
								<a {href} rel="external">{name}</a>{#if contribution}<span>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										&nbsp;({@html contribution})</span
									>{/if}
							{:else}
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{name}{#if contribution}<span>&nbsp;({@html contribution})</span>{/if}
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
				<span class="flex flex-wrap gap-x-1">
					{#each rankingInformation.artists as { id, href, name, contribution } (id)}
						<span class="not-last:after:content-[',']">
							{#if href}
								<a {href} rel="external">{name}</a>{#if contribution}<span>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										&nbsp;({@html contribution})</span
									>{/if}
							{:else}
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{name}{#if contribution}<span>&nbsp;({@html contribution})</span>{/if}
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
{/if}
