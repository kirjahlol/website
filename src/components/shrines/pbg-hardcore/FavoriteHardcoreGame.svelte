<script lang="ts">
	let { name, imageSource, imageAlt }: { name: string; imageSource: string; imageAlt: string } =
		$props();
</script>

<section>
	<h3>Favorite Hardcore Game</h3>
	<div class="flex flex-col items-center gap-2">
		<h1 class="text-lg italic">{name}</h1>
		<img src={imageSource} alt={imageAlt} class="max-w-48" />
	</div>
</section>
