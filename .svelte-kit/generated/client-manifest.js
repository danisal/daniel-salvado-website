export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/blog/[slug].svelte"),
	() => import("../../src/routes/blog/from-emt-to-web-developer/index.md"),
	() => import("../../src/routes/blog/hello-world/index.md"),
	() => import("../../src/routes/blog/index.svelte"),
	() => import("../../src/routes/blog/responsive-columns-with-css-grid/index.md"),
	() => import("../../src/routes/blog/responsive-data-tables-with-css-grid/index.md"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/legal-notice.svelte")
];

export const dictionary = {
	"": [[0, 9], [1]],
	"blog": [[0, 5], [1]],
	"contact": [[0, 8], [1]],
	"legal-notice": [[0, 10], [1]],
	"blog/from-emt-to-web-developer": [[0, 3], [1]],
	"blog/hello-world": [[0, 4], [1]],
	"blog/responsive-columns-with-css-grid": [[0, 6], [1]],
	"blog/responsive-data-tables-with-css-grid": [[0, 7], [1]],
	"blog/[slug]": [[0, 2], [1]]
};