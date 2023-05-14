<script lang="ts">
	export let data;

	const { title, date, content } = data;
</script>

<article class="prose mx-auto dark:prose-invert">
	<h1>{title}</h1>
	<p>Published: {date}</p>
	{@html content.html}
</article>
