<script lang="ts">
	interface Status {
		content: string;
		face: string;
		timeAgo: string;
	}

	async function getStatus(): Promise<Status> {
		const url = 'https://status.cafe/users/kirjahri/status.json';

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Fetch failed: ${response.status}`);
		}

		const status = await response.json();
		return status;
	}

	let statusPromise = getStatus();
</script>

<section>
	<h3>Status</h3>
	<div class="flex flex-col items-center">
		{#await statusPromise}
			<div class="mb-2 flex items-center gap-2">
				<span>❓</span>
				<span class="text-sm text-ctp-subtext0">(Loading...)</span>
			</div>
			<code class="mb-2 bg-ctp-base! p-4!"
				><span class="text-ctp-green-400">> <span class="font-semibold">echo</span></span>
				<span class="text-ctp-yellow-400">"Loading..."</span><span
					class="animate-blink text-ctp-rosewater-400">_</span
				></code
			>
		{:then status}
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
		{:catch error}
			<div class="mb-2 flex items-center gap-2">
				<span>❌</span>
				<span class="text-sm text-ctp-subtext0">(Error)</span>
			</div>
			<code class="mb-2 bg-ctp-base! p-4!"
				><span class="font-semibold text-ctp-red-400">{error.message}</span></code
			>
		{/await}
	</div>
	<div class="flex justify-between text-xs text-ctp-subtext0">
		<span>Powered by <a href="https://status.cafe/" target="_blank">Status Cafe</a></span>
		<a href="https://status.cafe/users/kirjahri" target="_blank">Past statuses</a>
	</div>
</section>
