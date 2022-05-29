export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/blog.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/legal-notice.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"blog": [[0, 2], [1]],
	"legal-notice": [[0, 4], [1]]
};