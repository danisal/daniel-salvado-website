<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let open: boolean = false;
</script>

<header
	class="sticky top-0 z-20 bg-white/95 px-4 py-4 font-semibold text-blue-800 shadow shadow-blue-800/10 backdrop-blur-lg dark:text-blue-200 [@supports(backdrop-filter:blur(0px))]:bg-white/5"
>
	<!-- mobile -->
	<button class="cursor-pointer border-none focus:outline-none sm:hidden" class:open on:click={() => (open = !open)}>
		<svg class="h-6 w-8 transform duration-300 ease-in-out" width="32" height="24">
			<line class="transform stroke-current stroke-2 duration-300 ease-in-out" id="top" x1="0" y1="2" x2="32" y2="2" />
			<line
				class="transform stroke-current stroke-2 duration-300 ease-in-out"
				id="middle"
				x1="0"
				y1="12"
				x2="24"
				y2="12"
			/>
			<line
				class="transform stroke-current stroke-2 duration-300 ease-in-out"
				id="bottom"
				x1="0"
				y1="22"
				x2="32"
				y2="22"
			/>
		</svg>
	</button>
	<section class="row mx-auto hidden max-w-7xl items-center justify-between sm:flex">
		<a class="font-beanie text-4xl font-medium" href="/">Daniel Salvado</a>
		<div class="flex items-center justify-between gap-8">
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
		@apply translate-x-1.5 rotate-45;
	}

	.open #middle {
		@apply opacity-0;
	}

	.open #bottom {
		@apply -translate-x-3 translate-y-2 -rotate-45;
	}
</style>
