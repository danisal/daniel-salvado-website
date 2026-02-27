<script lang="ts">
	import '../styles.css';
	import { page } from '$app/state';
	import {
		BASE_URL,
		BLUESKY_PROFILE_URL,
		GITHUB_PROFILE_URL,
		LINKEDIN_PROFILE_LINK,
		X_PROFILE_LINK
	} from '$lib/constants';
	import Header from '$lib/components/Header.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const meta = {
		title: 'Home',
		description: 'Daniel Salvado Virtual Space',
		url: BASE_URL
	};

	// SEO
	$: seoProps = {
		title: page.data.seoTitle || meta.title,
		titleTemplate: '%s | Daniel Salvado',
		description: page.data.seoDescription || meta.description,
		keywords: page.data.seoKeywords || [],
		openGraph: {
			type: 'website',
			url: meta.url,
			description: meta.description,
			images: [
				{
					url: `${BASE_URL}/images/1200x630.png`,
					alt: 'Daniel Salvado Banner',
					width: 1200,
					height: 675
				}
			]
		},
		twitter: {
			cardType: 'summary_large_image',
			title: page.data.seoTitle || meta.title,
			description: meta.description,
			image: `${BASE_URL}/images/1200x630.png`,
			imageAlt: 'Daniel Salvado Banner',
			site: meta.url
		},
		robots: 'index,follow',
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Daniel Salvado',
			url: BASE_URL,
			description: 'Daniel Salvado personal website',
			sameAs: [
				LINKEDIN_PROFILE_LINK,
				X_PROFILE_LINK,
				BLUESKY_PROFILE_URL,
				GITHUB_PROFILE_URL
			]
		}
	};
</script>

<!-- SEO -->
<SEO {...seoProps} />

<Header />
<slot />
<Footer />
