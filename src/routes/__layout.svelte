<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import Sidebar from "$lib/components/sidebar.svelte";

    import "../app.css";

    let open: boolean = false;
</script>

<Sidebar bind:open />
<Header bind:open />
<slot />
<Footer />
