<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let open: boolean = false;
</script>

<header
	class="sticky top-0 z-20 flex px-4 py-4 font-semibold text-blue-800 shadow shadow-blue-800/10 backdrop-blur dark:text-blue-200 [@supports(backdrop-filter:blur(0px))]:bg-white/5"
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
		<a class="font-beanie text-4xl font-medium" href="/">Daniel Salvado</a>
		<div class="flex items-center justify-between gap-8">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<nav class="flex items-center justify-between gap-2">
				<a href="/work">Work</a>
				<a href="/blog">Writing</a>
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
		@apply translate-x-1.5 rotate-45 transform-gpu;
	}

	.open #middle {
		@apply opacity-0;
	}

	.open #bottom {
		@apply -translate-x-[6px] translate-y-[11px] -rotate-45 transform-gpu;
	}
</style>
