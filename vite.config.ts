import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest-setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// Tell Vitest to use the `browser` entry points in `package.json` files, even though it's running in Node.
	// Without this, vite-plugin-svelte compiles components in SSR mode under Vitest, and `mount()` throws
	// `lifecycle_function_unavailable`. See https://svelte.dev/docs/svelte/testing
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
});
