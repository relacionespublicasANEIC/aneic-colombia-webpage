<script>
    import Container from "./Container.svelte";
    const social_media = {
        instagram: "https://www.instagram.com/aneiccolombia",
        linkedin: "https://www.linkedin.com/company/aneic-colombia/about/",
        twitter: "https://twitter.com/ANEIC",
        github: "https://github.com/relacionespublicasANEIC/aneic-colombia-webpage",
    };
</script>

<footer>
    <Container>
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="p-4">
                <img class="w-auto" src="/logo_big.svg" alt="Logo" />
            </div>
            <div class="p-4 flex items-start md:text-center justify-center">
                <div id="contact">
                    Asociación Nacional de Estudiantes de Ingeniería Civil de Colombia
                    <br />
                    <a href="mailto:aneiccolombia@gmail.com">aneiccolombia@gmail.com</a>
                    <br />
                    <br />Manizales, Colombia
                    <br />2024 (c)
                    <br />Capítulo avalado por ALEIC
                </div>
            </div>
            <div class="p-4 flex justify-center md:justify-start flex-col">
                <a
                    href="https://whatsapp.com/channel/0029VaaWHLN1t90fGQ4eU20t"
                    target="_blank"
                    class="flex p-2 mb-2 w-fit bg-zinc-300 hover:bg-zinc-200 rounded-md">
                    <img class="w-6 mr-2" src="/icons/whatsapp.svg" />
                    <p>Únete a nuestro canal de Whatsapp</p>
                </a>
                <a
                    href="/chapters#new"
                    class="flex p-2 mb-4 w-fit bg-zinc-300 hover:bg-zinc-200 rounded-md">
                    <img class="w-6 mr-2" src="/icons/add.svg" />
                    <p>¿Quieres formar un capítulo?</p>
                </a>

                <div class="flex space-x-2">
                    <!-- {
                        Object.entries(social_media).map(([name, link]) => (
                            <a href={link} target="_blank">
                                <img class="w-10" src={`/icons/${name}.svg`} />
                            </a>
                        ))
                    } -->
                </div>
            </div>
        </div>
    </Container>
</footer>
