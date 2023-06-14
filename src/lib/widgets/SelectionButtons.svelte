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
				class={`btn btn-rounded ${selectedOption === option ? 'btn-primary' : 'btn-outline'}`}
				on:click={() => handleOptionClick(option)}>{option}</button
			>
		{/each}
	</div>
</div>
