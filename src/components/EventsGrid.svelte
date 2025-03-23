<script lang="ts">
    const GOOGLE_PUBLIC_APIKEY = "AIzaSyAefY5wp8wLjgzwCIQbR8FE9DmDnxKKf7w";
    const GOOGLE_CALENDAR_ID =
        "534423cc08f9715367faf69adfd5e638aea3c67671cf7723adb88acdd8a807c3@group.calendar.google.com";

    function getDateText(isoDate: string) {
        let date = new Date(isoDate);
        return date.toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
    }

    function getTimeText(isoDate: string) {
        let date = new Date(isoDate);
        return date.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
    }

    async function getEvents() {
        const PARAMETERS = new URLSearchParams({
            key: GOOGLE_PUBLIC_APIKEY,
            timeMin: new Date().toISOString(),
            maxResults: "4",
            singleEvents: "true",
            orderBy: "startTime",
            eventTypes: "default",
        });

        let res = await fetch(
            `https://www.googleapis.com/calendar/v3/calendars/${GOOGLE_CALENDAR_ID}/events?${PARAMETERS}`,
        );

        let rawResponse = await res.json();
        return rawResponse.items.map((event: { [k: string]: any }) => {
            return {
                eid: event.htmlLink,
                title: event.summary,
                description: event?.description,
                start: event.start.dateTime,
                end: event.end.dateTime,
                meeting: event?.hangoutLink,
                cover: event?.attachments?.[0].fileId,
            };
        });
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
                <article class="bg-white border border-gray-200 rounded-lg shadow">
                    <img
                        class="rounded-t-lg"
                        alt="Portada para este evento"
                        src={event?.cover
                            ? `https://www.googleapis.com/drive/v3/files/${event.cover}?alt=media&key=${GOOGLE_PUBLIC_APIKEY}`
                            : "/DefaultCoverImage.webp"} />

                    <main class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {event.title}
                        </h5>

                        <p class="mb-3 font-normal text-gray-700">
                            {getDateText(event.start)} <br />
                            {getTimeText(event.start)}
                        </p>

                        <div class="space-y-2">
                            <a
                                href={event.eid}
                                target="_blank"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300">
                                Más información
                            </a>

                            {#if event.meeting}
                                <a
                                    href={event.meeting}
                                    target="_blank"
                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300">
                                    Únete a la reunión
                                </a>
                            {/if}
                        </div>
                    </main>
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
