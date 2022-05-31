<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch("/api/blogs.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts,
            },
        };
    };
</script>

<script lang="ts">
    import dayjs from "dayjs";
    import Bio from "$lib/components/bio.svelte";
    export let posts;
</script>

<svelte:head>
    <title>All posts | Daniel Salvado</title>
</svelte:head>

<main class="container prose mx-auto px-7 py-16">
    <h1 class="text-gray-700">Reading material</h1>
    <ol class="list-none p-0">
        {#each posts as post}
            <li class="p-0 m-0">
                <article>
                    <h3>
                        <a
                            class="text-blue-800 no-underline hover:underline-offset-8 hover:decoration-yellow-300 hover:underline hover:decoration-4"
                            href={post.path}>{post.meta.title}</a
                        >
                    </h3>
                    <div class="flex items-center justify-between">
                        <time
                            dateTime={dayjs(post.meta.date).format(
                                "ddd MMMM DD, YYYY"
                            )}
                        >
                            <small
                                >{dayjs(post.meta.date).format(
                                    "MMMM DD, YYYY"
                                )}</small
                            >
                        </time>
                        <small>
                            <span role="img" aria-label="clock emoji"> ⏱ </span>
                            2 minutes reading
                        </small>
                    </div>
                    <!-- <p>
                        Recently I came across with a UI challenge, I wanted to
                        have a group of elements that display in a row, that row
                        should also be dynamic. I…
                    </p> -->
                </article>
            </li>
        {/each}
    </ol>
    <Bio />
</main>
