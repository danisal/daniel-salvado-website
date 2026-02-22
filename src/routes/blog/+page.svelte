<script lang="ts">
	import dayjs from 'dayjs';
	import Card from '$lib/components/Card.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts } = data;

	let searchQuery = '';
	let selectedKeyword = '';

	// Get all unique keywords
	$: allKeywords = Array.from(
		new Set(posts.flatMap((post: { meta: { keywords?: string[] } }) => post.meta.keywords || []))
	).sort();

	// Filter posts based on search and keyword
	$: filteredPosts = posts.filter((post: { meta: { title: string; keywords?: string[] } }) => {
		const matchesSearch =
			searchQuery === '' ||
			post.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			(post.meta.keywords || []).some((k: string) =>
				k.toLowerCase().includes(searchQuery.toLowerCase())
			);

		const matchesKeyword =
			selectedKeyword === '' || (post.meta.keywords || []).includes(selectedKeyword);

		return matchesSearch && matchesKeyword;
	});
</script>

<main class="container mx-auto px-7 py-16">
	<div class="max-w-6xl mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-blue-950 dark:text-blue-50">
				Reading Material
			</h1>
			<p class="text-lg text-blue-700 dark:text-blue-300">
				Thoughts, tutorials, and learnings from my development journey
			</p>
		</div>

		<!-- Search and Filter -->
		<div class="mb-10 space-y-4">
			<div class="relative">
				<svg
					class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<input
					type="text"
					placeholder="Search posts by title or keyword..."
					bind:value={searchQuery}
					class="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-100 placeholder-blue-400 dark:placeholder-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
				/>
			</div>

			<!-- Keyword filters -->
			{#if allKeywords.length > 0}
				<div class="flex flex-wrap gap-2">
					<button
						on:click={() => (selectedKeyword = '')}
						class="px-4 py-2 rounded-full text-sm font-medium transition-all {selectedKeyword ===
						''
							? 'bg-blue-600 text-white'
							: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800'}"
					>
						All
					</button>
					{#each allKeywords as keyword}
						<button
							on:click={() => (selectedKeyword = String(keyword))}
							class="px-4 py-2 rounded-full text-sm font-medium transition-all {selectedKeyword ===
							keyword
								? 'bg-blue-600 text-white'
								: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800'}"
						>
							{keyword}
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Results count -->
		<p class="text-sm text-blue-600 dark:text-blue-400 mb-6">
			Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
		</p>

		<!-- Posts Grid -->
		{#if filteredPosts.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredPosts as post (post.path)}
					<Card href={post.path} variant="elevated" class="h-full">
						<article class="p-6 flex flex-col h-full">
							<h2
								class="text-xl font-bold mb-3 text-blue-950 dark:text-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
							>
								{post.meta.title}
							</h2>

							<div class="flex items-center gap-3 text-sm text-blue-600 dark:text-blue-400 mb-4">
								<time dateTime={dayjs(post.meta.date).format('YYYY-MM-DD')}>
									{dayjs(post.meta.date).format('MMM DD, YYYY')}
								</time>
								{#if post.meta.reading}
									<span>•</span>
									<span>{post.meta.reading} min read</span>
								{/if}
							</div>

							{#if post.meta.keywords && post.meta.keywords.length > 0}
								<div class="flex flex-wrap gap-2 mt-auto">
									{#each post.meta.keywords as keyword}
										<Badge variant="default" size="sm">{keyword}</Badge>
									{/each}
								</div>
							{/if}
						</article>
					</Card>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				<svg
					class="mx-auto h-12 w-12 text-blue-400 mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
					No posts found
				</h3>
				<p class="text-blue-600 dark:text-blue-400">
					Try adjusting your search or filter criteria
				</p>
			</div>
		{/if}
	</div>
</main>
