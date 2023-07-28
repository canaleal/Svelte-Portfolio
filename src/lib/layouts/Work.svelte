<script lang="ts">
	import { WORK_EXPERIENCE } from '$lib/constants';

	export let hasIconColor = false;
	export let isLazy = true;
	export let iconSize = 'w-32';
</script>

<div class="flex flex-row gap-8 overflow-hidden p-2 container justify-center">
	{#each WORK_EXPERIENCE as work}
		<img
			height="100"
			width="auto"
			title={work.company}
			class={`img-icon img-icon-color img-icon-no-rotate ${hasIconColor ? 'img-icon-color' : ''}  ${iconSize}`}
			alt={work.company}
			src={work.imageUrl}
			loading={isLazy ? 'lazy' : 'eager'}
		/>
	{/each}
</div>
