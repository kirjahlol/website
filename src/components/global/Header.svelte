<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let hostname = $state('kirjah.lol');
	if (page.url.hostname !== 'localhost') {
		hostname = page.url.hostname;
	}
</script>

<header class="font-mono text-xl font-medium">
	<a href={resolve('/')}>{hostname}</a>
</header>
