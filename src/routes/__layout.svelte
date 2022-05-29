<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	import '../app.css';
</script>

<svelte:head>
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Reenie+Beanie&display=swap&text=DanielSalvado"
	/>
</svelte:head>

<Header />
<slot />
<Footer />
