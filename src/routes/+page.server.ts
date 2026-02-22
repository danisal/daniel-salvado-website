import { fetchMarkdownPosts } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const allPosts = await fetchMarkdownPosts();

		return {
			posts: allPosts.sort(
				(a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
			)
		};
	} catch (err) {
		console.error('Error loading posts:', err);
		throw error(500, 'Could not load posts');
	}
};
