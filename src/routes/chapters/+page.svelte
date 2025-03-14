<script lang="ts">
    import Container from "@components/Container.svelte";
    import ChaptersInfo from "@components/Chapters.svelte";
    import SectionTitle from "@components/SectionTitle.svelte";
    import HeroTitle from "@components/HeroTitle.svelte";
</script>

<Container>
    <HeroTitle
        title="Somos un equipo"
        subtitle="En la actualidad, la Asociación Nacional de Estudiantes de Ingeniería Civil de Colombia (ANEIC) opera con una red de capítulos activos distribuidos en más de 8 universidades, con más de 530 estudiantes. Cada capítulo está constituido por una junta directiva capitular y cuenta con miembros activos que participan en las actividades y proyectos de la asociación a nivel local." />
</Container>

<Container>
    <ChaptersInfo />
</Container>

<Container>
    <SectionTitle title="Capítulos nuevos" />
    <section id="new" class="text-lg">
        <p>Siempre estamos en la búsqueda de crear nuevos capítulos</p>
    </section>
</Container>
