import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		alias: {
			$assets: resolve(__dirname, './src/assets'),
			$components: resolve(__dirname, './src/components'),
			$routes: resolve(__dirname, './src/routes')
		}
	}
});
