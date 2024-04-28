<script lang="ts">
    import type { AvaibleSocialMedia } from "../types/interfaces";
    export let name: string;
    export let logo: string;
    export let status: string;
    export let social_media: AvaibleSocialMedia;
</script>

<section class="flex flex-col items-center border rounded-lg p-2 border-black">
    <div class="flex flex-col place-items-center w-full py-2 h-full items-center">
        <img class="w-20 rounded-full" src={logo} alt={"Logo de " + name} />
        <h3 class="text-xl text-center w-full">{name}</h3>
    </div>
    <div class="flex space-x-2">
        {#each Object.entries(social_media) as social}
            <a href={social[1]} target="_blank">
                <img class="w-6" src={"./icons/" + social[0] + ".svg"} alt={"Icono de " + social[0]} />
            </a>
        {/each}
    </div>
</section>

<!-- export interface ChapterANEIC {
    departament: departmentISO;
    name: string;
    logo: string;
    university: {
        name: string;
        webpage: string;
    },
    social_media: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
        webpage?: string;
        mail?: string;
        youtube?: string;
    }
} -->
