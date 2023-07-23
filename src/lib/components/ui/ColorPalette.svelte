<script lang="ts">
	export let colorPalette: string[] = [];
</script>

<div class="flex flex-row">
    {#each colorPalette as color}
        <div class="img-card-sm w-full text-center justify-center flex flex-col text-white" style="background-color: {color}"><p>{color}</p></div>
    {/each}
</div>