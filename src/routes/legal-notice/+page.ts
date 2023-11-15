import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async () => {
	const metaTags = {
		title: 'Legal Note'
	} satisfies MetaTagsProps;

	return {
		metaTagsChild: metaTags
	};
};
