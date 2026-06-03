<script lang="ts">
	import pbgHardcoreLogo from '$assets/shrines/pbg-hardcore-logo.webp';
	import Shrines from '$components/shrines/Shrines.svelte';
	import type { Shrine } from '$components/shrines/Shrines.svelte';

	let shrines: Shrine[] = [
		{
			id: 1,
			pathname: '/shrines/pbg-hardcore',
			name: "PeanutButterGamer's <i>Hardcore</i> series",
			imageSource: pbgHardcoreLogo,
		},
	];
</script>

<section>
	<h3>About Shrines</h3>
	<p>
		<b>Shrines</b> are web pages that are dedicated to the webmaster's interests, whether that is a specific
		TV show, video game franchise, music artist, etc. Here, you can find some of the shrines I have made.
		Check them out if you have the time!
	</p>
	<hr />
	<Shrines {shrines} />
</section>
