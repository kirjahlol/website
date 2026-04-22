<script lang="ts">
	import Icon from '@iconify/svelte';

	const myTimeZone = 'America/New_York';

	let time = $state(
		new Date().toLocaleTimeString('en-US', {
			timeZone: myTimeZone,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		})
	);
	let date = $state(
		new Date().toLocaleDateString('en-US', {
			timeZone: myTimeZone,
			month: 'numeric',
			day: 'numeric'
		})
	);

	$effect(() => {
		const id = setInterval(() => {
			const now = new Date();
			time = now.toLocaleTimeString('en-US', {
				timeZone: myTimeZone,
				hour: 'numeric',
				minute: '2-digit',
				second: '2-digit'
			});
			date = now.toLocaleDateString('en-US', {
				timeZone: myTimeZone,
				month: 'numeric',
				day: 'numeric'
			});
		}, 1000);

		return () => clearInterval(id);
	});
</script>

<section>
	<h3>Date and Time</h3>
	<div class="flex flex-col items-center">
		<p class="flex items-center gap-2 font-mono">
			<Icon icon="tabler:calendar" class="size-6" />
			<code>{date}</code>
		</p>
		<div class="flex items-center gap-2">
			<Icon icon="tabler:clock" class="size-6" />
			<div class="flex flex-col items-center gap-y-1">
				<code>{time}</code>
			</div>
		</div>
	</div>
</section>
