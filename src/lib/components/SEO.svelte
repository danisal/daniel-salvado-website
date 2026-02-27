<script lang="ts">
	interface OpenGraphImage {
		url: string;
		alt: string;
		width: number;
		height: number;
	}

	interface OpenGraph {
		type: string;
		url: string;
		description: string;
		images?: OpenGraphImage[];
	}

	interface Twitter {
		cardType: string;
		title: string;
		description: string;
		image: string;
		imageAlt: string;
		site: string;
	}

	interface Props {
		title?: string;
		titleTemplate?: string;
		description?: string;
		keywords?: string[];
		openGraph?: OpenGraph;
		twitter?: Twitter;
		robots?: string;
		jsonLd?: object;
	}

	let {
		title = '',
		titleTemplate = '%s',
		description = '',
		keywords = [],
		openGraph,
		twitter,
		robots = 'index,follow',
		jsonLd
	}: Props = $props();

	const formattedTitle = titleTemplate.replace('%s', title);
	const keywordsString = keywords.join(', ');
</script>

<svelte:head>
	{#if formattedTitle}
		<title>{formattedTitle}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if keywordsString}
		<meta name="keywords" content={keywordsString} />
	{/if}

	{#if robots}
		<meta name="robots" content={robots} />
	{/if}

	{#if openGraph}
		<meta property="og:type" content={openGraph.type} />
		<meta property="og:url" content={openGraph.url} />
		<meta property="og:title" content={formattedTitle} />
		<meta property="og:description" content={openGraph.description} />
		{#if openGraph.images}
			{#each openGraph.images as image (image.url)}
				<meta property="og:image" content={image.url} />
				<meta property="og:image:alt" content={image.alt} />
				<meta property="og:image:width" content={image.width.toString()} />
				<meta property="og:image:height" content={image.height.toString()} />
			{/each}
		{/if}
	{/if}

	{#if twitter}
		<meta name="twitter:card" content={twitter.cardType} />
		<meta name="twitter:title" content={twitter.title} />
		<meta name="twitter:description" content={twitter.description} />
		<meta name="twitter:image" content={twitter.image} />
		<meta name="twitter:image:alt" content={twitter.imageAlt} />
		<meta name="twitter:site" content={twitter.site} />
	{/if}
</svelte:head>

{#if jsonLd}
	<script type="application/ld+json">
		{JSON.stringify(jsonLd)}
	</script>
{/if}
