<script lang="ts">
	import Button from "./Button.svelte";

	export let buttonOptions: string[];
	export let selectedOption: string;
	export let onClickFunction: Function;
</script>

<div class="flex flex-row w-full justify-center">
	{#each buttonOptions as buttonOption}
		<Button
			text={buttonOption}
			bgColor="{buttonOption === selectedOption ? 'btn-primary' : ''} w-full"
			onClickFunction={() => {onClickFunction(buttonOption)}}
		/>
	{/each}
</div>
