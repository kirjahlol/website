<script lang="ts">
	import { location } from '$lib';

	export interface ProfileCardItem {
		id: number;
		name: string;
		styles?: string;
		content: string;
	}

	let { items }: { items: ProfileCardItem[] } = $props();
</script>

<div
	class="flex max-h-60 max-w-sm items-center rounded-md border border-ctp-green-400/50 bg-ctp-green-400/25 p-4"
>
	<div class="grid grid-cols-[1fr_3fr] gap-2">
		<h2 class="text-center text-xl font-semibold text-ctp-green-400">{location}</h2>
		<div class="flex items-center justify-center">
			<h2
				class="rounded-full bg-ctp-green-400 px-4 py-2 text-center font-mono text-sm text-ctp-mantle uppercase"
			>
				Identification Card
			</h2>
		</div>
		<div class="flex flex-col items-center justify-center gap-2">
			<img src="/mii.png" alt="My Mii" class="bg-ctp-green-400/50" />
			<p class="italic">kirjah</p>
		</div>
		<ol class="list-none font-mono uppercase">
			{#each items as { id, name, styles, content } (id)}
				<li>
					<b>{name}:</b>
					{#if styles}
						<span class={styles}>{content}</span>
					{:else}
						{content}
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</div>
