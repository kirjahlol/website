<script lang="ts">
	interface Button {
		id: number;
		href?: string;
		src: string;
		alt: string;
	}

	const buttons: Button[] = [
		{
			id: 1,
			href: 'https://status.cafe',
			src: 'https://status.cafe/assets/button.png',
			alt: 'Button for Status Cafe',
		},
		{
			id: 2,
			href: 'https://trafficlunar.net/',
			src: 'https://trafficlunar.net/88x31.gif',
			alt: "Button for trafficlunar's website",
		},
		{
			id: 3,
			href: 'https://goooby.neocities.org/',
			src: 'https://goooby.neocities.org/goooby88x31new.png',
			alt: "Button for goob's website, Goooby",
		},
		{
			id: 4,
			href: 'https://petrapixel.neocities.org/',
			src: 'https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/assets/img/linkback.gif',
			alt: "Button for Petra's website, petrapixel",
		},
		{
			id: 5,
			href: 'https://doqmeat.com/',
			src: 'https://doqmeat.com/!g/web/doqmeat.png',
			alt: "Button for des' website",
		},
		{
			id: 6,
			href: 'https://jeith.com/',
			src: 'https://neocities.jeith.com/jeith.gif',
			alt: "Button for jeith's website",
		},
		{
			id: 7,
			href: 'https://isabelroses.com/',
			src: 'https://isabelroses.com/badges/me.gif',
			alt: "Button for isabel's website",
		},
		{
			id: 8,
			href: 'https://dimden.dev/',
			src: 'https://dimden.dev/services/images/88x31.gif',
			alt: "Button for dimden's website",
		},
	];
</script>

<div class="flex flex-wrap justify-center gap-2">
	{#each buttons as { id, href, src, alt } (id)}
		{#if href}
			<a {href} rel="external">
				<img
					{src}
					{alt}
					loading="lazy"
					class="h-7.75 w-22 transition-[scale] duration-150 [image-rendering:crisp-edges] hover:scale-110"
				/>
			</a>
		{:else}
			<img
				{src}
				{alt}
				loading="lazy"
				class="h-7.75 w-22 transition-[scale] duration-150 [image-rendering:crisp-edges] hover:scale-110"
			/>
		{/if}
	{/each}
</div>
