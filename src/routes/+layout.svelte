<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
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

<Sidebar bind:open />
<Header bind:open />
<slot />
<Footer />
