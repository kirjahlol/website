<script lang="ts">
	function calculateAge() {
		const birthday = new Date('2010-03-29T00:00:00.000Z');
		const currentDate = new Date();

		const diffInMs = currentDate.getTime() - birthday.getTime();
		const msInYear = 365.25 * 24 * 60 * 60 * 1000;

		return (diffInMs / msInYear).toFixed(2);
	}

	let age = calculateAge();
</script>

<code>{age}</code>
