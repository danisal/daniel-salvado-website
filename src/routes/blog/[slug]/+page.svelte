<script lang="ts">
	export let data;

	const { title, date, content } = data;
</script>

<article class="container prose mx-auto px-7 py-16 dark:prose-invert">
	<h1 class="text-balance">{title}</h1>
	<p>Published: {date}</p>
	{@html content.html}
</article>
