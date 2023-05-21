<script lang="ts">
	export let title: string = '';
	export let selectedOption: any;
	export let options: any[];

	const handleOptionClick = (option: any) => {
		selectedOption = option;
	};
</script>

<div class="flex flex-col gap-4">
	{#if title}
		<h5>{title}</h5>
	{/if}
	<div class="flex flex-row gap-4">
		{#each options as option}
			<button
				class={`card-btn card-btn-rounded ${selectedOption === option ? 'card-btn-primary' : 'card-btn-outline'}`}
				on:click={() => handleOptionClick(option)}>{option}</button
			>
		{/each}
	</div>
</div>
