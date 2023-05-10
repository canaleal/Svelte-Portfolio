<script lang="ts">
    export let title : string = 'Select Filter';
    export let selectedOption : any;
    export let options : any[];

    const handleOptionClick = (option: any) => {
        selectedOption = option;
    }
</script>

<p class="font-bold">{title}</p>
<div class="flex flex-row gap-4 mt-2">
    {#each options as option}
        <button class={`card-btn  ${selectedOption === option ? 'card-btn-blue' : 'card-btn-outline'} rounded-lg`} on:click={() => handleOptionClick(option)}>{option}</button>
    {/each}
</div>