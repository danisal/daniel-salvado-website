<script lang="ts">
	import dayjs from 'dayjs';
	export let data;

	const { posts } = data;
</script>

<main class="container prose mx-auto px-7 py-16 dark:prose-invert">
	<h1>Reading material</h1>
	<ol class="list-none p-0">
		{#each posts as post}
			<li class="m-0 p-0">
				<article>
					<h3>
						<a
							class="no-underline hover:underline hover:decoration-amber-300 hover:decoration-4 hover:underline-offset-8 dark:text-blue-200"
							href={post.path}>{post.meta.title}</a
						>
					</h3>
					<div class="flex items-center justify-between">
						<time dateTime={dayjs(post.meta.date).format('ddd MMMM DD, YYYY')}>
							<small>{dayjs(post.meta.date).format('MMMM DD, YYYY')}</small>
						</time>
						<small>
							<span role="img" aria-label="clock emoji"> ⏱ </span>
							{post.meta.reading} minutes reading
						</small>
					</div>
				</article>
			</li>
		{/each}
	</ol>
</main>
