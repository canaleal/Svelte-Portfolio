<script lang="ts">
	export let listType = 'list-disc';
	export let items: string[] = [];
</script>

<div class="{listType}">
	{#each items as item}
		<p>{item}</p>
	{/each}
</div>
