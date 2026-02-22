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

<header
	class="sticky top-0 z-20 flex px-4 py-4 font-semibold text-blue-800 shadow shadow-blue-800/10 backdrop-blur dark:text-blue-200 [@supports(backdrop-filter:blur(0px))]:bg-white/95 dark:[@supports(backdrop-filter:blur(0px))]:bg-stone-950/95 transition-all duration-300"
>
	<!-- mobile -->
	<button
		aria-label="Navigation Menu"
		class="cursor-pointer border-none focus:outline-none sm:hidden"
		class:open
		on:click={() => (open = !open)}
	>
		<svg class="h-5 w-7 transform duration-300 ease-in-out" width="28" height="20">
			<line
				class="transform stroke-current stroke-2 duration-300 ease-in-out"
				id="top"
				x1="0%"
				y1="6.25%"
				x2="100%"
				y2="6.25%"
			/>
			<line
				class="transform stroke-current stroke-2 duration-300 ease-in-out"
				id="middle"
				x1="0"
				y1="37.5%"
				x2="75%"
				y2="37.5%"
			/>
			<line
				class="transform stroke-current stroke-2 duration-300 ease-in-out"
				id="bottom"
				x1="0%"
				y1="68.75%"
				x2="100%"
				y2="68.75%"
			/>
		</svg>
	</button>
	<section class="row mx-auto hidden w-full max-w-7xl items-center justify-between sm:flex">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a
			class="font-beanie text-4xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
			href="/"
		>
			Daniel Salvado
		</a>
		<div class="flex items-center justify-between gap-8">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<nav class="flex items-center justify-between gap-6">
				<a
					href="/work"
					class="relative py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 {isActive(
						'/work'
					)
						? 'text-blue-600 dark:text-blue-400'
						: ''}"
				>
					Work
					{#if isActive('/work')}
						<span
							class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
						></span>
					{/if}
				</a>
				<a
					href="/blog"
					class="relative py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 {isActive(
						'/blog'
					)
						? 'text-blue-600 dark:text-blue-400'
						: ''}"
				>
					Writing
					{#if isActive('/blog')}
						<span
							class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
						></span>
					{/if}
				</a>
			</nav>

			<ThemeToggle />
		</div>
	</section>
</header>

<style>
	.open svg {
		@apply scale-75;
	}

	.open #top {
		@apply translate-x-[6px] rotate-45 transform-gpu;
	}

	.open #middle {
		@apply opacity-0;
	}

	.open #bottom {
		@apply -translate-x-[6px] translate-y-[11px] -rotate-45 transform-gpu;
	}
</style>
