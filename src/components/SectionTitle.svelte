<script lang="ts">
    const { title, subtitle = "" } = $props();
</script>

<section class="relative flex flex-col items-center md:flex-row">
    <div class="row items-center py-5 md:pr-16 md:w-6/12 md:py-10">
        <div class="text-center md:text-left space-y-3 bg-orange-400">
            <h2 class="text-2xl font-medium leading-none sm:text-4xl">
                {title}
            </h2>
        </div>
    </div>
    <div class="flex items-center py-5 md:w-5/12 md:py-10">
        <p class="text-xl font-normal leading-7 text-center md:text-left">
            {subtitle}
        </p>
    </div>
</section>
