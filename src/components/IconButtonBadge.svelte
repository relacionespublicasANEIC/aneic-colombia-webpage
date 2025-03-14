<script lang="ts">
    const { title, description, button, link, icon } = $props();
</script>

<div class="flex-row items-center my-6 p-12 bg-zinc-200 rounded-[48px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="justify-start items-center gap-[275px] flex">
            <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black">
                <div class="text-4xl font-medium">{title}</div>
                <div class="text-lg text-justify font-normal">
                    {description}
                </div>
                <a
                    href={link}
                    target={link.includes("https") ? "_blank" : "_self"}
                    class="px-10 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex">
                    <div class="text-center text-xl font-normal leading-7">
                        {button}
                    </div>
                </a>
            </div>
        </div>
        <div class="hidden md:grid justify-items-center">
            <img src={icon} class="w-3/4" alt="A beatiful icon" />
        </div>
    </div>
</div>
