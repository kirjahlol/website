<script lang="ts">
	import catppuccinLogo from '$assets/catppuccin-logo.webp';
	import { tooltip } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<!-- Catppuccin Webring -->
<div class="flex items-center gap-2">
	<a href="https://ctp-webr.ing/kirjah/previous">
		<Icon
			icon="tabler:arrow-left"
			class="size-6 text-ctp-text! transition-[scale] duration-150 hover:scale-120"
		/>
	</a>
	<a href="https://ctp-webr.ing/" {@attach tooltip('Catppuccin Webring', 'bottom')}>
		<img
			src={catppuccinLogo}
			alt="Catppuccin logo"
			loading="lazy"
			class="size-12 transition-[scale] duration-150 hover:scale-110"
		/>
	</a>
	<a href="https://ctp-webr.ing/kirjah/next">
		<Icon
			icon="tabler:arrow-right"
			class="size-6 text-ctp-text! transition-[scale] duration-150 hover:scale-120"
		/>
	</a>
</div>

<!-- WiiRing -->
<div class="w-33.75">
	<iframe
		src="https://wiiring.jeith.com/snippet?site=https://kirjah.lol&variant=standard"
		title="WiiRing"
		class="w-full border-none"
	></iframe>
</div>
