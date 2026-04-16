<script lang="ts">
	import ProfilePicture from '$lib/assets/profile-picture.webp';
	import Age from '$lib/components/Age.svelte';
	import DateAndTime from '$lib/components/DateAndTime.svelte';
	import Labels from '$lib/components/Labels.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import Status from '$lib/components/Status.svelte';
</script>

<div class="grid w-5xl grid-cols-[1fr_3fr] gap-2 rounded-lg">
	<aside class="flex flex-col items-center gap-2 [&_section]:w-full">
		<img src={ProfilePicture} alt="PFP" class="size-48 rounded-full bg-ctp-mantle" />
		<Status />
		<DateAndTime />
		<Socials />
	</aside>
	<main class="flex flex-col gap-2 [&_section]:w-full">
		<section>
			<h3>About Me</h3>
			<p>
				Hi! My name is <span class="font-semibold text-ctp-green-400">kirjah</span>
				<span class="text-sm text-ctp-subtext0 italic">(KUR-jah)</span>. I'm <Age />-year-old
				self-taught programmer.
			</p>
			<p>
				Some of my hobbies are coding things, drawing digitally (you can find my art on Twitter),
				and playing
				<a href="https://lounge.mkcentral.com/mkworld" target="_blank"
					>competitive Mario Kart World</a
				>
				(you can find my Lounge stats
				<a
					href="https://lounge.mkcentral.com/mkworld/PlayerDetails/79021?season=2&p=12"
					target="_blank">here</a
				>).
			</p>
			<p>
				The best way to get in contact with me is through Discord (username is <code>kirjah</code>)
				or Twitter.
			</p>
			<Labels />
			<hr class="my-2" />
			<h3>About Website</h3>
			<p>
				This website was built using <a
					href="https://svelte.dev/docs/kit/introduction"
					target="_blank">SvelteKit</a
				>
				and
				<a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. For it, I'm using the
				color theme

				<a
					href="https://catppuccin.com/"
					target="_blank"
					class="bg-linear-to-r from-ctp-peach-400 to-ctp-mauve-400 bg-clip-text text-transparent!"
					>Catppuccin</a
				>
				and the icon set <a href="https://tabler.io/icons">Tabler Icons</a>. You can find it hosted
				on both
				<a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages</a> and
				<a href="https://neocities.org/" target="_blank">Neocities</a>.
			</p>
		</section>
		<!-- <section> -->
		<!-- 	<h3>About Website</h3> -->
		<!-- 	<p> -->
		<!-- 		This website was built using <a -->
		<!-- 			href="https://svelte.dev/docs/kit/introduction" -->
		<!-- 			target="_blank">SvelteKit</a -->
		<!-- 		> -->
		<!-- 		and -->
		<!-- 		<a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. For it, I'm using the -->
		<!-- 		color theme -->
		<!---->
		<!-- 		<a -->
		<!-- 			href="https://catppuccin.com/" -->
		<!-- 			target="_blank" -->
		<!-- 			class="bg-linear-to-r from-ctp-peach-400 to-ctp-mauve-400 bg-clip-text text-transparent!" -->
		<!-- 			>Catppuccin</a -->
		<!-- 		> -->
		<!-- 		and the icon set <a href="https://tabler.io/icons">Tabler Icons</a>. You can find it hosted -->
		<!-- 		on both -->
		<!-- 		<a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages</a> and -->
		<!-- 		<a href="https://neocities.org/" target="_blank">Neocities</a>. -->
		<!-- 	</p> -->
		<!-- </section> -->
	</main>
	<hr class="col-span-2 mb-2" />
</div>
