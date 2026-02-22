type PostMetadata = {
	title: string;
	date: string;
	keywords: string[];
	image?: string;
	reading?: number;
};

type PostModule = {
	metadata: PostMetadata;
};

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob<PostModule>('/src/routes/blog/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -9);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
