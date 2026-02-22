<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';
	import { page } from '$app/stores';

	export let open: boolean = false;

	$: currentPath = $page.url.pathname;

	function isActive(path: string): boolean {
		if (path === '/') {
			return currentPath === '/';
		}
		return currentPath.startsWith(path);
	}
</script>

<aside
	class="fixed z-20 flex h-screen w-screen flex-col overscroll-none bg-white/95 px-2 pt-20 pb-2 backdrop-blur-lg transition-all duration-300 ease-in-out dark:bg-stone-950/95 dark:text-blue-200"
	class:left-0={open}
	class:-left-full={!open}
>
	<!-- Backdrop -->
	{#if open}
		<button
			on:click={() => (open = false)}
			class="absolute inset-0 bg-black/20 dark:bg-black/40 -z-10"
			aria-label="Close menu"
		></button>
	{/if}

	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<nav class="mx-4 my-3 flex flex-col gap-6 text-4xl">
		<a
			on:click={() => (open = !open)}
			href="/"
			class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 {isActive('/')
				? 'text-blue-600 dark:text-blue-400'
				: ''}"
		>
			Home
		</a>
		<a
			on:click={() => (open = !open)}
			href="/work"
			class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 {isActive('/work')
				? 'text-blue-600 dark:text-blue-400'
				: ''}"
		>
			Work
		</a>
		<a
			on:click={() => (open = !open)}
			href="/blog"
			class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 {isActive('/blog')
				? 'text-blue-600 dark:text-blue-400'
				: ''}"
		>
			Writing
		</a>
	</nav>
	<ThemeToggle class="self-end" />
</aside>
