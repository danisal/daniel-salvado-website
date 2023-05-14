<script lang="ts">
    export let open: boolean = false;
</script>

<aside
    class="w-screen h-screen fixed transition-all duration-300 ease-in-out z-20 flex overflow-hidden pt-20 px-2 pb-2 bg-white/95 backdrop-blur-lg [@supports(backdrop-filter:blur(0px))]:bg-white/5"
    class:left-0={open}
    class:-left-full={!open}
>
    <nav class="flex flex-col gap-2">
        <a on:click={() => (open = !open)} href="/">Home</a>
        <a on:click={() => (open = !open)} href="/work">Work</a>
        <a on:click={() => (open = !open)} href="/blog">Writing</a>
        <a on:click={() => (open = !open)} href="/contact"> Say Hello </a>
    </nav>
</aside>
