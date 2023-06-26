<script lang="ts">
	export let listType = 'list-disc';
	export let items: string[] = [];
</script>

<div class="{listType} pl-2">
	{#each items as item}
		<li>{item}</li>
	{/each}
</div>
