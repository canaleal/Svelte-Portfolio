<script lang="ts">
	import type { ICarElementType } from "$lib/types/car-types";
	import IconImage from "../IconImage.svelte";
    export let carElements: ICarElementType[];
</script>

{#if carElements}
<table class="table table-auto">
    <thead >
        <tr >
            <th class="w-1/4 px-4  py-5 bg-primary text-white text-xl">Name</th>
            <th class="w-1/4 px-4  py-5 bg-dark text-white text-xl">Year</th>
            <th class="w-1/4 px-4  py-5 bg-dark text-white text-xl">Type</th>
            <th class="w-1/4 px-4  py-5 bg-dark text-white text-xl">Logo</th>
        </tr>
    </thead>
    <tbody>
       
        {#each carElements as carElement, i}
            <tr>
                <td class="border px-4 py-2">{carElement.name}</td>
                <td class="border px-4 py-2">{carElement.year}</td>
                <td class="border px-4 py-2">{carElement.type}</td>
                <td class="border px-4 py-2"><IconImage url={carElement.imgUrl} hasColor={true} iconSize="w-12" isLazy={true} />
                    </td
                >
            </tr>
        {/each}
    </tbody>
</table>
{/if}
