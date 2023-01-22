import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			postcss: true,
		}),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [relativeImages],
		}),
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
	},
};

export default config;
