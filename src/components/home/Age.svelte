<script lang="ts">
	import { dateOfBirth, getAge } from '$lib';
	import numberToWords from 'number-to-words';

	let age = $state(getAge(new Date(dateOfBirth), 5));

	$effect(() => {
		const id = setInterval(() => {
			age = getAge(new Date(dateOfBirth), 5);
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
