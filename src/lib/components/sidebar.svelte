<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let open: boolean = false;
</script>

<aside
	class="fixed z-20 flex h-screen w-screen flex-col overscroll-none bg-white/95 px-2 pt-20 pb-2 backdrop-blur-lg transition-all duration-300 ease-in-out dark:bg-stone-950 dark:text-blue-200 [@supports(backdrop-filter:blur(0px))]:bg-white/5"
	class:left-0={open}
	class:-left-full={!open}
>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<nav class="mx-4 my-3 flex flex-col gap-6 text-4xl">
		<a on:click={() => (open = !open)} href="/">Home</a>
		<a on:click={() => (open = !open)} href="/work">Work</a>
		<a on:click={() => (open = !open)} href="/blog">Writing</a>
	</nav>
	<ThemeToggle class="self-end" />
</aside>
