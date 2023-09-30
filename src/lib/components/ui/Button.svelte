<script lang="ts">
	export let url = '';
	export let text = 'Code';
	export let icon = '';
	export let label = '';
	export let bgColor = '';
	export let isRounded = true;
	export let target = url.includes('http') ? '_blank' : '';
	export let onClickFunction: Function = () => {};
</script>

{#if url}
	<a
		href={url}
		aria-label={label || url}
		{target}
		rel="noreferrer"
		class="btn  {isRounded ? 'btn-rounded' : ''} {bgColor}"
	>
		<div class="fill-from-center" />
		<div class="flex flex-row justify-center">
			{#if icon}
				<i class="{icon} mr-2 my-auto" />
			{/if}

			<span>{text}</span>
		</div>
	</a>
{:else}
	<button aria-label={label || text} class="btn {isRounded ? 'btn-rounded' : ''} {bgColor}" on:click={()=>{onClickFunction(text)}}>
		<div class="fill-from-center" />
		<div class="flex flex-row justify-center">
			{#if icon}
				<i class="{icon} mr-2 my-auto" />
			{/if}

			<span>{text}</span>
		</div>
	</button>
{/if}
