import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex({
            extensions: [".md"],
            layout: {
                blog: "src/routes/blog/[slug].svelte",
            },
            remarkPlugins: [relativeImages],
        }),
    ],
    extensions: [".svelte", ".md"],
    kit: {
        adapter: adapter(),
    },
};

export default config;