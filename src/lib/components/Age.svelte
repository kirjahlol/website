<script lang="ts">
	import numberToWords from 'number-to-words';

	function getAge(birthday: Date, digits: number = 0): number {
		const currentDate = new Date();

		const diffInMs = currentDate.getTime() - birthday.getTime();
		const msInYear = 365.25 * 24 * 60 * 60 * 1000;

		return Number((diffInMs / msInYear).toFixed(digits));
	}

	let age = $state(getAge(new Date('2010-03-29T00:00:00.000Z'), 5));

	$effect(() => {
		const id = setInterval(() => {
			// If you came here to find out when my birthday is, then congrats: you found it
			// Here's a cookie for you efforts: 🍪
			age = getAge(new Date('2010-03-29T00:00:00.000Z'), 5);
		}, 315600);

		return () => clearInterval(id);
	});
</script>

<!-- This is like the most trivial thing ever but I'm doing it anyway -->
{#if numberToWords.toWords(age).match('^[aeiou].*')}
	<span>an <code>{age}</code></span>
{:else}
	<span>a <code>{age}</code></span>
{/if}
