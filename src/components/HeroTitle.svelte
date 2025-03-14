<script lang="ts">
    const { title, subtitle } = $props();
</script>

<div class="relative flex flex-col-reverse items-center md:flex-row">
    <div class="row items-center md:pt-10">
        <div class="text-center space-y-10">
            <h2 class="text-5xl font-medium leading-none md:text-6xl">
                {title}
            </h2>
            <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
                {subtitle}
            </p>
        </div>
    </div>
</div>
