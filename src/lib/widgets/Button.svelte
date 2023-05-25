<script lang="ts">
	export let url = '';
	export let text = 'Code';
	export let icon = '';
	export let label = '';
	export let bgColor = '';
	export let isRounded = true;
	export let target = url.includes('http') ? '_blank' : '';
</script>

{#if url}
	<a
		href={url}
		aria-label={label || url}
		{target}
		rel="noreferrer"
		class="card-btn {isRounded ? "card-btn-rounded": ""} {bgColor}"
	>
		{#if icon}
			<i class="{icon} mr-2" />
		{/if}

		{text}</a
	>
{:else}
	<button aria-label={label || text} class="card-btn {isRounded ? "card-btn-rounded": ""} {bgColor}">
		{#if icon}
			<i class="{icon} mr-2" />
		{/if}

		{text}
	</button>
{/if}
