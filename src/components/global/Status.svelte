<script lang="ts">
	interface Status {
		content: string;
		face: string;
		timeAgo: string;
	}

	async function getStatusData<T>(): Promise<T> {
		const url = 'https://status.cafe/users/kirjahri/status.json';

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Fetch failed: ${response.status}`);
		}

		return (await response.json()) as T;
	}

	async function getStatus(): Promise<Status> {
		const data = await getStatusData<Status>();
		return data;
	}

	let status: Status | undefined = $state();
	$effect(() => {
		getStatus().then((value) => (status = value));
	});
</script>

<section>
	<h3>Status</h3>
	<div class="flex flex-col items-center">
		{#if status}
			<div class="mb-2 flex items-center gap-2">
				<span>{status.face}</span>
				<span class="text-sm text-ctp-subtext0">({status.timeAgo})</span>
			</div>
			<code class="mb-2 bg-ctp-base! p-4!"
				><span class="text-ctp-green-400">> <span class="font-semibold">echo</span></span>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span class="text-ctp-yellow-400">"{@html status.content}"</span><span
					class="animate-blink text-ctp-rosewater-400">_</span
				></code
			>
		{:else}
			<p class="mb-2">Loading...</p>
		{/if}
	</div>
	<div class="flex justify-between text-xs text-ctp-subtext0">
		<span>Powered by <a href="https://status.cafe/" target="_blank">Status Cafe</a></span>
		<a href="https://status.cafe/users/kirjahri" target="_blank">Past statuses</a>
	</div>
</section>
