import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		seoDescription:
			'Senior Frontend Engineer focused on building scalable web systems with React, TypeScript, and modern tooling.'
	};
};
