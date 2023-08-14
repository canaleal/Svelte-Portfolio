<script lang="ts">
	export let listType = 'list-disc';
	export let items: string[] = [];
</script>

<ul class="{listType} ">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>
