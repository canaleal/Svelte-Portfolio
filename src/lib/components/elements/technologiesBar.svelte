<script lang="ts">
    export let technologies: string[];
    export let extraClasses: string = '';
</script>

<div class="flex flex-row gap-2 flex-wrap {extraClasses}">
    {#each technologies as technologies}
        <div class="rounded-lg px-3 py-1 items-center bg-teal-400/10">
            <p class="text-sm font-medium text-teal-300">{technologies}</p>
        </div>
    {/each}
</div>