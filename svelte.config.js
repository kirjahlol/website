import adapter from '@sveltejs/adapter-static';
import { execSync } from 'child_process';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$assets: 'src/assets',
			$components: 'src/components',
			$routes: 'src/routes'
		},
		version: { name: execSync('git rev-parse --short HEAD').toString().trim() }
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })]
};

export default config;
