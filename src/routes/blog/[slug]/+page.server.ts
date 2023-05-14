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
	// const content = post.default;

	return {
		keywords,
		title,
		date,
		content
	};
}) satisfies PageServerLoad;
