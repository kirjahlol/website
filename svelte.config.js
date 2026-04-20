import adapter from '@sveltejs/adapter-static';
import { execSync } from 'child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH
		},
		version: { name: execSync('git rev-parse --short HEAD').toString().trim() }
	}
};

export default config;
