<script lang="ts">
	import { MetaTags, JsonLd, type MetaTagsProps } from 'svelte-meta-tags';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

	import '../app.css';
	import { page } from '$app/stores';

	// Control the sidebar on mobile
	let open: boolean = false;

	const meta = {
		title: 'Home',
		description: 'Daniel Salvado Virtual Space',
		url: 'https://danielsalvado.com'
	};

	// SEO
	$: metaTags = {
		title: meta.title,
		titleTemplate: '%s | Daniel Salvado',
		description: meta.description,
		openGraph: {
			type: 'website',
			url: meta.url,
			description: meta.description,
			images: [
				{
					url: 'https://danielsalvado.com/images/1200x630.png',
					alt: 'Daniel Salvado Banner',
					width: 1200,
					height: 675
				}
			]
		},
		twitter: {
			cardType: 'summary_large_image',
			title: meta.title,
			description: meta.description,
			image: 'https://danielsalvado.com/images/1200x630.png',
			imageAlt: 'Daniel Salvado Banner',
			site: meta.url
		},
		robots: 'index,follow',
		...$page.data.metaTagsChild
	} satisfies MetaTagsProps;
</script>

<!-- SEO -->
<MetaTags {...metaTags} />

<Sidebar bind:open />
<Header bind:open />
<slot />
<Footer />

<!-- Structured Data -->
<JsonLd
	output="body"
	schema={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Daniel Salvado',
		url: 'https://danielsalvado.com',
		description: 'Daniel Salvado personal website',
		sameAs: [
			'https://www.linkedin.com/in/daniel-salvado/',
			'https://twitter.com/danisalTweets',
			'https://github.com/danisal'
		]
	}}
/>
