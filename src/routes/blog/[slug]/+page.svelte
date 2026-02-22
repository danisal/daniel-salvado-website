<script lang="ts">
	export let data;

	const { title, date, content } = data;
</script>

<article class="prose dark:prose-invert container mx-auto px-7 py-16">
	<h1 class="text-balance">{title}</h1>
	<p>Published: {date}</p>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content.html}
</article>
