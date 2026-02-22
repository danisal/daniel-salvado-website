<script>
	import Twitter from '$lib/components/Twitter.svelte';
	// import Bluesky from '$lib/components/Bluesky.svelte';
	import GitHub from '$lib/components/GitHub.svelte';
	import LinkedIn from '$lib/components/LinkedIn.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-blue-200 dark:border-blue-800 bg-white dark:bg-stone-900 mt-auto">
	<div class="container mx-auto px-7 py-8">
		<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
			<p class="text-blue-700 dark:text-blue-300">
				&copy; {year} Daniel Salvado. All rights reserved.
			</p>
			<div class="flex items-center space-x-6">
				<a
					aria-label="Daniel on linkedin"
					href="https://www.linkedin.com/in/daniel-salvado/"
					rel="noopener noreferrer"
					target="_blank"
					class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
				>
					<LinkedIn aria-hidden="true" aria-label="linkedin" class="h-6 w-6" />
				</a>
				<a
					aria-label="Daniel on github"
					href="https://github.com/danisal"
					rel="noopener noreferrer"
					target="_blank"
					class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
				>
					<GitHub aria-hidden="true" aria-label="github" class="h-6 w-6" color="currentcolor" />
				</a>
				<a
					aria-label="Daniel on twitter"
					href="https://twitter.com/danisalTweets"
					rel="noopener noreferrer"
					target="_blank"
					class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
				>
					<Twitter aria-hidden="true" aria-label="twitter" class="h-6 w-6" color="currentColor" />
				</a>
				<!--		<a aria-label="Daniel on Bluesky" href="https://bsky.app/profile/danisal.bsky.social" rel="noopener noreferrer"-->
				<!--			 target="_blank">-->
				<!--			<Bluesky aria-hidden="true" aria-label="bluesky" class="h-6 w-6" />-->
				<!--		</a>-->
			</div>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a
				href="/legal-notice"
				class="text-blue-600 dark:text-blue-400 hover:underline transition-colors text-sm"
			>
				Legal Notice
			</a>
		</div>
	</div>
</footer>
