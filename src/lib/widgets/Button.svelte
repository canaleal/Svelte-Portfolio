<script lang="ts">
	export let url = '';
	export let text = 'Code';
	export let icon = '';
	export let label = '';
	export let bgColor = '';
	export let target = url.includes('http') ? '_blank' : '';
</script>

<a href={url} aria-label={label || url} {target} rel="noreferrer" class="card-btn {bgColor}">
	{#if icon}
		<i class="{icon} mr-2" />
	{/if}

	{text}</a
>
