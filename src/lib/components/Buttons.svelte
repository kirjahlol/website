<script lang="ts">
	interface Button {
		href?: string;
		src: string;
		alt: string;
	}

	const buttons: Button[] = [
		{
			href: 'https://trafficlunar.net/',
			src: 'https://trafficlunar.net/88x31.gif',
			alt: "Button for trafficlunar's website"
		},
		{
			href: 'https://goooby.neocities.org/',
			src: 'https://goooby.neocities.org/goooby88x31new.png',
			alt: "Button for goob's website, Goooby"
		},
		{
			href: 'https://petrapixel.neocities.org/',
			src: 'https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif',
			alt: "Button for Petra's website, petrapixel"
		},
		{
			href: 'https://jeith.com/',
			src: 'https://neocities.jeith.com/jeith.gif',
			alt: "Button for jeith's website"
		},
		{
			href: 'https://isabelroses.com/',
			src: 'https://isabelroses.com/badges/me.gif',
			alt: "Button for isabel's website"
		},
		{
			href: 'https://dimden.dev/',
			src: 'https://dimden.dev/services/images/88x31.gif',
			alt: "Button for dimden's website"
		}
	];
</script>

<section>
	<h3>Buttons</h3>
	<div class="flex flex-wrap justify-center">
		{#each buttons as { href, src, alt }, i (i)}
			{#if href}
				<a {href} rel="external" target="_blank">
					<img {src} {alt} class="h-7.75 w-22 [image-rendering:crisp-edges]" />
				</a>
			{:else}
				<img {src} {alt} class="h-7.75 w-22 [image-rendering:crisp-edges]" />
			{/if}
		{/each}
	</div>
</section>
