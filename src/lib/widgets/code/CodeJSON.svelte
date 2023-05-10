<script lang="ts">
	import Value from "./Value.svelte";
	export let data : any[] = [];
</script>

<div class="json-container">
	<p class="punctuation">{'['}</p>
	{#each data as elementObj, i}
        <div class="ml-4">
		<p class="punctuation">{'{'}</p>
		{#each Object.keys(elementObj) as key}
			<div class="flex flex-row">
				<span class="punctuation">"</span>
				<span class="key">{key}</span>
				<span class="punctuation">"</span>
				<span class="punctuation mx-2">:</span>

				<Value value={elementObj[key]} />

				{#if i !== data.length - 1 || key !== Object.keys(elementObj)[Object.keys(elementObj).length - 1]}
					<span class="punctuation">,</span>
				{/if}
			</div>
		{/each}
		<p class="punctuation">
			{'}'}
			{#if i !== data.length - 1}
				<span class="punctuation">,</span>
			{/if}
		</p>
    </div>
	{/each}
	<p class="punctuation">{']'}</p>
</div>

