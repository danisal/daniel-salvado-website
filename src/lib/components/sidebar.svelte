<script lang="ts">
	export let open: boolean = false;
</script>

<aside
	class="fixed z-20 flex h-screen w-screen overflow-hidden bg-white/95 px-2 pb-2 pt-20 backdrop-blur-lg transition-all duration-300 ease-in-out [@supports(backdrop-filter:blur(0px))]:bg-white/5"
	class:left-0={open}
	class:-left-full={!open}
>
	<nav class="flex flex-col gap-2">
		<a on:click={() => (open = !open)} href="/">Home</a>
		<a on:click={() => (open = !open)} href="/work">Work</a>
		<a on:click={() => (open = !open)} href="/blog">Writing</a>
	</nav>
</aside>
