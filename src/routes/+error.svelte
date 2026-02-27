<script lang="ts">
	import { page } from '$app/state';
</script>

<main class="flex flex-col items-center justify-center text-center">
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
			class="inline-block px-6 py-3 bg-amber-500 dark:bg-amber-300 text-amber-950 rounded-lg font-medium no-underline hover:bg-amber-600 dark:hover:bg-amber-400 hover:no-underline transition-colors"
		>
			&larr; Go back home
		</a>
	</div>
</main>
