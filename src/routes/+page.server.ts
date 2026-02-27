import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		seoTitle: 'Daniel Salvado',
		seoDescription:
			'Senior Frontend Engineer focused on building scalable web systems with React, TypeScript, and modern tooling.',
		seoKeywords: ['frontend engineer', 'React', 'TypeScript', 'web development', 'Daniel Salvado']
	};
};
