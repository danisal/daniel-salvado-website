<script lang="ts">
    import dayjs from "dayjs";

    export let title;
    export let date;

    console.log(title, date);
</script>

<main class="container prose mx-auto px-7 py-16">
    <h1 class="text-gray-700">{title}</h1>
    <div>{dayjs(date).format("MMMM DD, YYYY")}</div>

    <slot />
</main>
