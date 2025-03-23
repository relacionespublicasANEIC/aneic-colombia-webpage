<script lang="ts">
    import Navbar from "@components/Navbar.svelte";
    import Footer from "@components/Footer.svelte";
    import Container from "@components/Container.svelte";
</script>

<header class="top-0 left-0 z-50 fixed w-full bg-white">
    <Navbar />
</header>

<Container>
    <section class="mt-8">
        <slot />
        <Footer />
    </section>
</Container>
