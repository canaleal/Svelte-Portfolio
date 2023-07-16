<script lang="ts">
	export let title: string = '';
	export let placeholder: string = 'Search...';
	export let onChangeFunction: Function;

	let search: string = '';
</script>

<div class="flex flex-col gap-4">
	{#if title}
		<p class="text-subtitle">{title}</p>
	{/if}

	<div class="search-container">
		<input
			type="search"
			bind:value={search}
			required
			class="search-input"
			{placeholder}
			on:change={() => onChangeFunction(search)}
		/>
		<i class="fas fa-search search-icon" />
	</div>
</div>
