<script lang="ts">
	import Icon from '@iconify/svelte';

	function getTimeZoneDiff(): number {
		const myDate = new Date();

		const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const clientDate = new Date(myDate.toLocaleString('en-US', { timeZone: clientTimeZone }));

		const diffInMs = myDate.getTime() - clientDate.getTime();
		return Number((diffInMs / (1000 * 60 * 60)).toFixed(2));
	}

	function getTimeZoneDiffText(): string {
		const timeZoneDiff = getTimeZoneDiff();
		if (timeZoneDiff === 0) {
			return 'same time';
		} else if (timeZoneDiff > 0) {
			return `${timeZoneDiff}h ahead`;
		} else {
			return `${Math.abs(timeZoneDiff)}h behind`;
		}
	}

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

	let timeZoneDiffText = getTimeZoneDiffText();
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
				<span class="text-sm text-ctp-subtext0 italic">({timeZoneDiffText})</span>
			</div>
		</div>
	</div>
</section>
