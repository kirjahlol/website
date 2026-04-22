<script lang="ts">
	import { tooltip } from '$lib';
	import catppuccinLogo from '$lib/assets/catppuccin-logo.webp';
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center gap-2">
	<a href="https://ctp-webr.ing/kirjah/previous">
		<Icon icon="tabler:arrow-left" class="size-6" />
	</a>
	<a href="https://ctp-webr.ing/" {@attach tooltip('Catppuccin Webring', 'bottom')}>
		<img src={catppuccinLogo} alt="Catppuccin logo" class="size-24" />
	</a>
	<a href="https://ctp-webr.ing/kirjah/next">
		<Icon icon="tabler:arrow-right" class="size-6" />
	</a>
</div>
