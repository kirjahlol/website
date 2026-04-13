<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<h1 class="text-5xl">{page.status}</h1>
	<p class="text-ctp-subtext0">{page.error?.message}</p>
</div>
