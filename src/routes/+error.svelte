<script lang="ts">
	import { page } from '$app/state';
</script>

<main id="main" class="flex flex-col items-center justify-center text-center">
	<h1 class="font-beanie text-8xl font-medium">
		{page.status}
	</h1>
	<p class="mt-4 text-xl">
		{#if page.status === 404}
			The page you're looking for doesn't exist.
		{:else}
			{page.error?.message || 'Something went wrong.'}
		{/if}
	</p>
	<div class="mt-10">
		<a
			href="/"
			class="inline-block rounded-lg bg-amber-500 px-6 py-3 font-medium text-amber-950 no-underline transition-colors hover:bg-amber-600 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-950 dark:bg-amber-300 dark:hover:bg-amber-400 dark:focus-visible:ring-amber-950"
		>
			&larr; Go back home
		</a>
	</div>
</main>
