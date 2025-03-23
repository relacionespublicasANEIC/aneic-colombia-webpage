<script lang="ts">
    import Container from "./Container.svelte";
    import Menu_2 from "@icons/menu-2.svelte";
    let isNavbarVisible = $state(false);
    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Nosotros" },
        { href: "/chapters", label: "Capítulos" },
        { href: "/activities", label: "Actividades" },
        { href: "#contact", label: "Contáctanos" },
    ];
</script>

<nav>
    <Container>
        <div class="flex flex-wrap items-center justify-between mx-auto py-3">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo_notext.svg" class="md:hidden h-8" alt="Logo" />
                <img src="/logo_lateral.svg" class="hidden md:block h-8" alt="Logo" />
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                onclick={() => (isNavbarVisible = !isNavbarVisible)}
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
                aria-controls="navbar-default"
                aria-expanded="false">
                <Menu_2 />
            </button>
            <section
                class="w-full md:block md:w-auto transition-all"
                class:hidden={!isNavbarVisible}>
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    {#each navLinks as link}
                        <li>
                            <a
                                href={link.href}
                                class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                                onclick={() => (isNavbarVisible = false)}>
                                {link.label}
                            </a>
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
    </Container>
</nav>
