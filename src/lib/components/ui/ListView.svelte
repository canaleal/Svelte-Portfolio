<script lang="ts">
	export let listType = 'list-disc';
	export let items: string[] = [];
</script>

<ul class="{listType} ml-2">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
