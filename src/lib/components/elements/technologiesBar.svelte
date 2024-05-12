<script lang="ts">
	export let technologies: string[];
	export let extraClasses: string = '';
	export let limit: number = 5;
</script>

<div class="flex flex-row gap-2 flex-wrap {extraClasses}">
	{#each technologies.slice(0, limit) as technology}
		<div class="rounded-md px-3 py-1 items-center bg-dark-800">
			<p class="text-sm font-medium text-zinc-50">{technology}</p>
		</div>
	{/each}

	{#if technologies.length > limit}
		<div class="rounded-md px-3 py-1 items-center bg-dark-800">
			<p class="text-sm font-medium text-zinc-50">+ {technologies.length - limit} more</p>
		</div>
	{/if}
</div>
