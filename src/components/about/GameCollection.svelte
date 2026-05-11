<script lang="ts">
	export interface SteamGames {
		id: number;
		isFavorite?: boolean;
		appId: number;
		name: string;
	}

	export interface OtherGames {
		id: number;
		isFavorite?: boolean;
		href: string;
		imageSource: string;
		name: string;
	}

	let { steamGames, otherGames }: { steamGames: SteamGames[]; otherGames: OtherGames[] } = $props();
</script>

<div class="flex flex-col rounded-md border border-ctp-surface0 bg-ctp-crust p-4">
	<h3>Steam Games</h3>
	<div class="flex flex-col gap-2">
		<div class="flex flex-wrap justify-center gap-2">
			{#each steamGames as { id, isFavorite, appId, name } (id)}
				{#if isFavorite}
					<a
						href="https://store.steampowered.com/app/{appId}"
						target="_blank"
						class="aspect-600/900 max-h-48"
					>
						<img
							src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/{appId}/library_600x900.jpg"
							alt={name}
							loading="lazy"
							class="h-full rounded-sm border-2 border-ctp-green-400 transition-[scale] duration-150 hover:scale-105"
						/>
					</a>
				{:else}
					<a
						href="https://store.steampowered.com/app/{appId}"
						target="_blank"
						class="aspect-600/900 max-h-48"
					>
						<img
							src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/{appId}/library_600x900.jpg"
							alt={name}
							loading="lazy"
							class="h-full rounded-md border border-ctp-surface0 transition-[scale] duration-150 hover:scale-105"
						/>
					</a>
				{/if}
			{/each}
		</div>
		<span class="text-xs text-ctp-subtext0"
			>Powered by <a href="https://steamdb.info/" target="_blank">SteamDB</a></span
		>
	</div>
	<hr />
	<h3>Other Games</h3>
	<div class="flex flex-col gap-2">
		<div class="flex flex-wrap justify-center gap-2">
			{#each otherGames as { id, isFavorite, href, imageSource, name } (id)}
				{#if isFavorite}
					<a {href} rel="external" target="_blank" class="aspect-600/900 max-h-48">
						<img
							src={imageSource}
							alt={name}
							loading="lazy"
							class="h-full rounded-md border-2 border-ctp-green-400 transition-[scale] duration-150 hover:scale-105"
						/>
					</a>
				{:else}
					<a {href} rel="external" target="_blank" class="aspect-600/900 max-h-48">
						<img
							src={imageSource}
							alt={name}
							loading="lazy"
							class="h-full rounded-sm border border-ctp-surface0 transition-[scale] duration-150 hover:scale-105"
						/>
					</a>
				{/if}
			{/each}
		</div>
		<span class="mb-2 text-xs text-ctp-subtext0"
			>Powered by <a href="https://www.steamgriddb.com/" target="_blank">SteamGridDB</a></span
		>
	</div>
	<div class="flex items-center justify-center gap-2">
		<span class="size-4 rounded-sm border-2 border-ctp-green-400"></span> Favorite
	</div>
</div>
