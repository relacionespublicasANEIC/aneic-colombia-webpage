<script lang="ts">
    import Container from "@components/Container.svelte";
    import SectionTitle from "@components/SectionTitle.svelte";
    import IconButtonBadge from "@components/IconButtonBadge.svelte";
    import EventsGrid from "@components/EventsGrid.svelte";
    // import InfiniteScroll from "@components/InfiniteScroll.astro";
</script>

<!-- Changes specific for CONEIC 2024. -->
<Container name="hero">
    <div class="relative flex flex-col-reverse items-center md:flex-row">
        <div class="row items-center py-5 md:w-2/4">
            <div class="text-left space-y-3">
                <h1 class="text-5xl font-medium leading-none md:text-6xl text-center">
                    Asociación Nacional de Estudiantes de Ingeniería Civil de Colombia
                </h1>
                <h2
                    class="text-2xl font-medium leading-none md:text-4xl my-2 text-center text-blue-700">
                    <a href="/coneic/2024">¡Celebrando el CONEIC 2024!</a>
                </h2>
            </div>
        </div>
        <div class="flex items-center py-5 md:w-2/4">
            <img src="/CONEIC2024.webp" class="w-11/12" alt="A beatiful icon" />
        </div>
    </div>
</Container>

<!-- <Container>
    <InfiniteScroll />
</Container> -->

<Container name="events">
    <SectionTitle title="Próximos eventos" />
    <EventsGrid />
</Container>

<Container>
    <IconButtonBadge
        title="Somos un gran equipo"
        description="En la actualidad, la Asociación Nacional de Estudiantes de Ingeniería Civil de Colombia opera con una red de capítulos activos distribuidos en más de ocho universidades, con más de 530 estudiantes."
        button="Conoce cuáles son"
        link="/chapters"
        icon="/TeamDecoration.svg" />
</Container>

<Container>
    <IconButtonBadge
        title="Siempre en contacto"
        description="Mantente informado y conectado a través de nuestro canal de WhatsApp, donde compartiremos información valiosa y actualizaciones sobre las próximas actividades y eventos."
        button="Únete al canal"
        link="https://whatsapp.com/channel/0029VaaWHLN1t90fGQ4eU20t"
        icon="/WhatsAppDecoration.svg" />
</Container>

<Container>
    <IconButtonBadge
        title="Crea tu propio capítulo"
        description="Si tu universidad aún no cuenta con un capítulo de la asociación y cuentan con un grupo de personas interesadas en unirse para lograr cosas grandes, siempre estamos dispuestos a unir más asociaciones a la lista."
        button="Conoce el proceso"
        link="/chapters#new"
        icon="/ChapterDecoration.svg" />
</Container>
