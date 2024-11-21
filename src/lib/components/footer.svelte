<script>
	import Twitter from '$lib/components/Twitter.svelte';
	import Bluesky from '$lib/components/Bluesky.svelte';
	import GitHub from '$lib/components/GitHub.svelte';
	import LinkedIn from '$lib/components/LinkedIn.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="container mx-auto flex flex-col-reverse items-center justify-between gap-6 py-4 sm:flex-row">
	<p>&copy; {year} Daniel Salvado</p>
	<div class="flex space-x-4">
		<a
			aria-label="Daniel on linkedin"
			href="https://www.linkedin.com/in/daniel-salvado/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<LinkedIn aria-hidden="true" aria-label="linkedin" class="h-6 w-6" />
		</a>
		<a aria-label="Daniel on github" href="https://github.com/danisal" rel="noopener noreferrer" target="_blank">
			<GitHub aria-hidden="true" aria-label="github" class="h-6 w-6" color="currentcolor"/>
		</a>
		<a
			aria-label="Daniel on twitter"
			href="https://twitter.com/danisalTweets"
			rel="noopener noreferrer"
			target="_blank"
		>
			<Twitter aria-hidden="true" aria-label="twitter" class="h-6 w-6" color="currentColor"/>
		</a>
<!--		<a aria-label="Daniel on Bluesky" href="https://bsky.app/profile/danisal.bsky.social" rel="noopener noreferrer"-->
<!--			 target="_blank">-->
<!--			<Bluesky aria-hidden="true" aria-label="bluesky" class="h-6 w-6" />-->
<!--		</a>-->
	</div>
	<a href="/legal-notice">Legal Notice</a>
</footer>
