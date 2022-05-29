<script>
	import Bio from '$lib/components/bio.svelte';
</script>

<main class="container prose mx-auto px-7 py-16">
	<h1>Reading material</h1>
	<article>
		<h3>
			<!-- <Link to="/blog/responsive-columns-with-css-grid">Responsive Columns With Css Grid</Link> -->
		</h3>
		<div class="flex items-center justify-between">
			<time dateTime="Sat Jul 20 2019">
				<small>July 20, 2019</small>
			</time>
			<small>
				<span role="img" aria-label="clock emoji"> ⏱ </span>
				2 minutes reading
			</small>
		</div>
		<p>
			Recently I came across with a UI challenge, I wanted to have a group of elements that display
			in a row, that row should also be dynamic. I…
		</p>
	</article>
	<Bio />
</main>
