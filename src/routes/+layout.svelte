<script lang="ts">
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

	import '../app.css';
	import { page } from '$app/stores';

	// Control the sidebar on mobile
	let open: boolean = false;

	// SEO
	$: metaTags = {
		title: 'Home',
		titleTemplate: '%s | Daniel Salvado',
		description: 'Daniel Salvado Virtual Space',

		...$page.data.metaTagsChild
	};
</script>

<!-- SEO -->
<MetaTags {...metaTags} />

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

<Sidebar bind:open />
<Header bind:open />
<slot />
<Footer />
