<script lang="ts">
    export let open: boolean = false;
</script>

<header
    class="sticky top-0 z-20 py-4 text-indigo-600 shadow shadow-indigo-600/10 bg-white/95 backdrop-blur-lg [@supports(backdrop-filter:blur(0px))]:bg-white/5 px-4"
>
    <!-- mobile -->
    <button
        class="cursor-pointer border-none focus:outline-none sm:hidden"
        class:open
        on:click={() => (open = !open)}
    >
        <svg
            class="w-8 h-6 transform ease-in-out duration-300"
            width="32"
            height="24"
        >
            <line
                class="stroke-current stroke-2 ease-in-out duration-300 transform"
                id="top"
                x1="0"
                y1="2"
                x2="32"
                y2="2"
            />
            <line
                class="stroke-current stroke-2 ease-in-out duration-300 transform"
                id="middle"
                x1="0"
                y1="12"
                x2="24"
                y2="12"
            />
            <line
                class="stroke-current stroke-2 ease-in-out duration-300 transform"
                id="bottom"
                x1="0"
                y1="22"
                x2="32"
                y2="22"
            />
        </svg>
    </button>
    <section
        class="hidden sm:flex row mx-auto max-w-7xl items-center justify-between"
    >
        <a class="font-beanie text-4xl font-normal" href="/">Daniel Salvado</a>
        <nav class="flex items-center justify-between gap-2">
            <a href="/">Home</a>
            <a href="/work">Work</a>
            <a href="/blog">Writing</a>
            <a href="/contact"> Say Hello </a>
        </nav>
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
