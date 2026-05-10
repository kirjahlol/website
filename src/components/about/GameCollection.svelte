<script lang="ts">
	export interface SteamGames {
		id: number;
		isFavorite?: boolean;
		appId: number;
		name: string;
	}

	let { steamGames }: { steamGames: SteamGames[] } = $props();
</script>

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
						class="h-full rounded-md border-2 border-ctp-green-400 transition-[scale] duration-150 hover:scale-105"
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
						class="h-full rounded-md border border-ctp-surface0 transition-[scale] duration-150 hover:scale-105"
					/>
				</a>
			{/if}
		{/each}
	</div>
	<div class="flex items-center justify-center gap-2">
		<span class="size-4 rounded-md border-2 border-ctp-green-400"></span> Favorite
	</div>
</div>
