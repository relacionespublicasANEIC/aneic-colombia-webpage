<script>
    function getDateText(isoDate) {
        let date = new Date(isoDate);
        return date.toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
    }

    function getTimeText(isoDate) {
        let date = new Date(isoDate);
        return date.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    }

    async function getEvents() {
        let res = await fetch("/api/nextEvents");
        return await res.json();
    }
</script>

{#await getEvents()}
    <section class="flex w-full justify-center">
        <div class="flex-column md:flex items-center justify-center">
            <h3 class="text-center text-lg">Buscando los eventos...</h3>
        </div>
    </section>
{:then eventList}
    {#if eventList.length !== 0}
        <section class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each eventList as event}
                <article class=" rounded-lg overflow-hidden h-max bg-zinc-200">
                    <img
                        class="w-full aspect-video"
                        src={event?.cover ? "/api/image" + event.cover : "/DefaultCoverImage.webp"}
                        alt="Portada para este evento"
                    />

                    <div class="p-2 w-full">
                        <h3 class="text-2xl text-ellipsis leading-none">{event.title}</h3>
                        <h4 class="my-2">{getDateText(event.start)} <br /> {getTimeText(event.start)}</h4>

                        <div>
                            <a
                                href={`https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=${event.eid}&tmsrc=${import.meta.env.CALENDAR_ID}`}
                                target="_blank"
                                class="flex p-2 mb-2 w-fit bg-zinc-900 hover:bg-white text-white hover:text-black rounded-md"
                            >
                                Añadir a tu calendario
                            </a>
                            {#if event.meeting}
                                <a
                                    href={event.meeting}
                                    target="_blank"
                                    class="flex p-2 mb-2 w-fit bg-zinc-900 hover:bg-white text-white hover:text-black rounded-md"
                                >
                                    <p>Unirte a la reunión</p>
                                </a>
                            {/if}
                        </div>
                    </div>
                </article>
            {/each}
        </section>
    {:else}
        <section class="flex w-full justify-center">
            <div class="flex-column md:flex items-center justify-center">
                <h3 class="text-center text-lg">No tenemos eventos planeados próximamente</h3>
            </div>
        </section>
    {/if}
{:catch e}
    <section class="flex w-full justify-center">
        <div class="flex-column md:flex items-center justify-center">
            <h3 class="text-center text-lg">Tuvimos un error al recibir los eventos</h3>
        </div>
    </section>
{/await}
