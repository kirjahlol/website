<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let hostname = $state('kirjah.lol');
	if (page.url.hostname !== 'localhost') {
		hostname = page.url.hostname;
	}
</script>

<header class="absolute top-4 left-4 font-mono font-medium">
	<a href={resolve('/')}>{hostname}</a>
</header>
