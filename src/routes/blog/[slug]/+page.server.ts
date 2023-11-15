import type { MetaTagsProps } from 'svelte-meta-tags';
import type { PageServerLoad } from '../$types';

type Post = {
	title: string;
	date: string;
	keywords: string[];
};

export const load = (async ({ params }) => {
	const post = await import(`../${params.slug}/index.md`);
	const content = post.default.render();

	const { title, date, keywords }: Post = post.metadata;

	const metaTags = {
		title,
		keywords
	} satisfies MetaTagsProps;

	return {
		content,
		date,
		keywords,
		metaTagsChild: metaTags,
		title
	};
}) satisfies PageServerLoad;
