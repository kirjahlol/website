<script lang="ts">
	import Age from '$components/home/Age.svelte';
	import Labels from '$components/home/Labels.svelte';
</script>

<section>
	<h3>Welcome</h3>
	<p>
		Hello, and welcome to my website! I am the webmaster, <span
			class="font-semibold text-ctp-green-400">kirjah</span
		>
		<span class="text-sm text-ctp-subtext0">(KUR-jah)</span>, <Age />-year-old self-taught
		programmer. Take a look around!
	</p>
	<Labels />
	<!-- <hr /> -->
	<!-- <h3>About Website</h3> -->
	<!-- <p> -->
	<!-- 	This website was built using <a href="https://svelte.dev/docs/kit/introduction" target="_blank" -->
	<!-- 		>SvelteKit</a -->
	<!-- 	> -->
	<!-- 	and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. It uses the -->
	<!-- 	<a -->
	<!-- 		href="https://catppuccin.com/" -->
	<!-- 		target="_blank" -->
	<!-- 		class="bg-linear-to-r from-ctp-peach-400 to-ctp-mauve-400 bg-clip-text text-transparent!" -->
	<!-- 		>Catppuccin</a -->
	<!-- 	> -->
	<!-- 	color theme and <a href="https://iconify.design/" target="_blank">Iconify</a> for managing -->
	<!-- 	icons. The tooltips that appear when certan things are hovered over (like -->
	<!-- 	<span class="underline decoration-dotted" {@attach tooltip("I'm a Tippy.js tooltip!", 'bottom')} -->
	<!-- 		>this</span -->
	<!-- 	>) were made using the -->
	<!-- 	<a href="https://atomiks.github.io/tippyjs/" target="_blank">Tippy.js</a> -->
	<!-- 	library. This site is hosted on -->
	<!-- 	<a -->
	<!-- 		href="https://docs.github.com/en/pages" -->
	<!-- 		target="_blank" -->
	<!-- 		{@attach tooltip('<code>kirjah.lol</code>', 'bottom')}>GitHub Pages</a -->
	<!-- 	>, -->
	<!-- 	<a -->
	<!-- 		href="https://neocities.org/" -->
	<!-- 		target="_blank" -->
	<!-- 		{@attach tooltip('<code>kirjah.neocities.org</code>', 'bottom')}>Neocities</a -->
	<!-- 	>, and -->
	<!-- 	<a -->
	<!-- 		href="https://nekoweb.org/" -->
	<!-- 		target="_blank" -->
	<!-- 		{@attach tooltip('<code>kirjah.nekoweb.org</code>', 'bottom')}>Nekoweb</a -->
	<!-- 	>. -->
	<!-- </p> -->
</section>
