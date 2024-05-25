<script lang="ts">
    import dataColombia from "./data/colombia_departaments.json";
    import chapterAneic from "./data/chapters_aneic.json";
    import ChapterCard from "./ChapterCard.svelte";

    let currentDepartament = "CO";
    $: currentChapters =
        currentDepartament === "CO" ? chapterAneic : chapterAneic.filter((e) => e.departament === currentDepartament);
</script>

<div class="relative flex flex-col-reverse items-start md:flex-row">
    <div class="hidden md:flex flex-col px-4 py-4 w-full md:py-0 items-center md:w-5/12">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 680 930"
            class="cursor-pointer w-full"
            on:click|self={() => {
                currentDepartament = "CO";
            }}
        >
            <path fill-rule="evenodd" class="fill-none stroke-2" d={dataColombia[0].path} />

            {#each dataColombia.slice(1) as departament (departament.id)}
                <path
                    on:click={() => {
                        currentDepartament = departament.id;
                    }}
                    name={departament.name}
                    fill-rule="evenodd"
                    d={departament.path}
                    class:fill-violet-500={departament.id == currentDepartament}
                    class:opacity-100={departament.id == currentDepartament}
                    class="fill-orange-400 cursor-pointer stroke-black stroke-1"
                />
            {/each}
        </svg>
    </div>
    <div class="flex flex-col w-full md:w-7/12">
        <h2 class="hidden md:block w-full text-4xl my-4 text-center">
            {dataColombia.find((e) => e.id === currentDepartament)?.name}
        </h2>

        <div class="w-full overflow-x-auto">
            <!-- <select bind:value={currentDepartament}>
                {#each dataColombia as departament (departament.id)}
                <option value={departament.id}>{departament.name}</option>
                {/each}
            </select> -->

            <div>
                {#if currentChapters.length === 0}
                    <div class="flex flex-col items-center p-6">
                        <img src="/Hero.svg" class="w-3/4" alt="Logo para invitar a personas a unirse">
                        <h3 class="text-center w-full">
                            En este departamento todavia no hay capítulos activos.
                        </h3>
                    </div>
                {:else}
                    <div class="grid gap-4 grid-cols-3 md:grid-cols-4">
                        {#each currentChapters as chapter}
                            <ChapterCard {...chapter}></ChapterCard>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
