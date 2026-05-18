<script lang="ts">
	import type { Status } from '$lib';

	let {
		state,
		status,
		errorMessage
	}: { state: 'loading' | 'success' | 'error'; status?: Status; errorMessage?: string } = $props();
</script>

<section>
	<h3>Status</h3>
	<div class="mb-2 flex flex-col items-center">
		{#if state === 'loading'}
			<div class="mb-2 flex items-center gap-2">
				<span>❓</span>
				<span class="text-sm text-ctp-subtext0">(Loading...)</span>
			</div>
			<code class="self-stretch bg-ctp-base! p-4!"
				><span class="text-ctp-green">> <span class="font-semibold">echo</span></span>
				<span class="text-ctp-yellow-400">"Loading..."</span><span
					class="animate-blink text-ctp-rosewater-400">_</span
				></code
			>
		{:else if state === 'success' && status}
			<div class="mb-2 flex items-center gap-2">
				<span>{status.face}</span>
				<span class="text-sm text-ctp-subtext0">({status.timeAgo})</span>
			</div>
			<code class="self-stretch bg-ctp-base! p-4!"
				><span class="text-ctp-green">> <span class="font-semibold">echo</span></span>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span class="text-ctp-yellow-400">"{@html status.content}"</span><span
					class="animate-blink text-ctp-rosewater-400">_</span
				></code
			>
		{:else if state === 'error' && errorMessage}
			<div class="mb-2 flex items-center gap-2">
				<span>❌</span>
				<span class="text-sm text-ctp-subtext0">(Error)</span>
			</div>
			<code class="self-stretch bg-ctp-base! p-4!"
				><span class="font-semibold text-ctp-red-400">{errorMessage}</span></code
			>
		{/if}
	</div>
	<div class="flex justify-between text-xs text-ctp-subtext0">
		<span>Powered by <a href="https://status.cafe/">Status Cafe</a></span>
		<a href="https://status.cafe/users/kirjahri">Past statuses</a>
	</div>
</section>
