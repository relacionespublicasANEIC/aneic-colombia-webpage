<script lang="ts">
    import Container from "./Container.svelte";
    const navLinks = [
        { href: "/about", label: "Nosotros" },
        { href: "/chapters", label: "Capítulos" },
        { href: "/activities", label: "Actividades" },
        { href: "#contact", label: "Contáctanos" },
        { href: "/coneic/2024", label: "CONEIC 2024" },
    ];
</script>

<header>
    <nav class="w-full top-0 left-0 z-50 fixed bg-white">
        <Container>
            <div class="flex flex-wrap items-center justify-between mx-auto py-3">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo_notext.svg" class="md:hidden h-8" alt="Logo" />
                    <img src="/logo_lateral.svg" class="hidden md:block h-8" alt="Logo" />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span class="sr-only">Abrir menú principal</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {#each navLinks as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0">
                                    {link.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
</header>

<!-- <script is:inline>
    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.getElementById("navbar-default");

        const toggleButton = document.querySelector(
            '[data-collapse-toggle="navbar-default"]',
        );
        const navLinks = navbar.querySelectorAll("a");

        if (toggleButton) {
            toggleButton.addEventListener("click", () =>
                navbar.classList.toggle("hidden"),
            );
        }

        navLinks.forEach((link) =>
            link.addEventListener("click", () =>
                navbar.classList.add("hidden"),
            ),
        );
    });
</script> -->
