<script lang="ts">
    import Container from "@components/Container.svelte";
    import SectionTitle from "@components/SectionTitle.svelte";
    import IconButtonBadge from "@components/IconButtonBadge.svelte";
    import EventsGrid from "@components/EventsGrid.svelte";
</script>

<Container name="hero">
    <div class="relative flex flex-col-reverse items-center md:flex-row">
        <div class="row items-center py-5 md:w-2/4">
            <div class="text-left space-y-3">
                <h1 class="text-5xl font-medium leading-none md:text-6xl text-center">
                    Asociación Nacional de Estudiantes de Ingeniería Civil de Colombia
                </h1>
            </div>
        </div>
        <div class="flex items-center py-5 md:w-2/4">
            <img src="/ColombiaDecoration.svg" class="w-11/12" alt="A beatiful icon" />
        </div>
    </div>
</Container>

<Container name="events">
    <SectionTitle title="Próximos eventos" />
    <EventsGrid />
    <!-- <iframe
        src="https://calendar.google.com/calendar/embed?wkst=2&ctz=America%2FBogota&showPrint=0&showTz=0&mode=AGENDA&showTabs=0&showNav=0&showCalendars=0&title&src=NTM0NDIzY2MwOGY5NzE1MzY3ZmFmNjlhZGZkNWU2MzhhZWEzYzY3NjcxY2Y3NzIzYWRiODhhY2RkOGE4MDdjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
        height="600"
        frameborder="0"
        scrolling="no"
        title="Calendario con eventos de ANEIC Colombia"
        class="w-full aspect-video"></iframe> -->
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
        title="Crea tu propio capítulo"
        description="Si tu universidad aún no cuenta con un capítulo de la asociación y cuentan con un grupo de personas interesadas en unirse para lograr cosas grandes, siempre estamos dispuestos a unir más asociaciones a la lista."
        button="Conoce el proceso"
        link="/chapters#new"
        icon="/ChapterDecoration.svg" />
</Container>
