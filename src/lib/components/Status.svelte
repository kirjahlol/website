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
	getStatus().then((value) => (status = value));
</script>

<section>
	<h3>Status</h3>
	<div class="flex flex-col items-center">
		{#if status}
			<span class="text-sm text-ctp-subtext0 italic">({status.timeAgo})</span>
			<p class="mb-2 text-center">{status.face} "{status.content}"</p>
		{:else}
			<p class="mb-2">Loading...</p>
		{/if}
	</div>
	<div class="flex justify-between text-xs text-ctp-subtext0">
		<span>Powered by <a href="https://status.cafe/" target="_blank">Status Cafe</a></span>
		<a href="https://status.cafe/users/kirjahri" target="_blank">Past statuses</a>
	</div>
</section>
