<script lang="ts">
	import { getDevicon } from '$lib/utils/devicon-icons';

	export let icons: string[] = [];
	export let altTexts: string[] = [];
	export let iconSize = 'w-4';
	export let hasIconColor = false;
	export let firstHasIconColor = false;
	export let isDevicon = false;
	export let isLazy = true;
	export let gap = 'gap-4';
</script>

<div class="flex flex-1 flex-wrap {gap}">
	{#each icons as icon, i}
		<img
			height="100"
			width="auto"
			title={altTexts[i] ?? icon}
			class={`img-icon ${hasIconColor || (firstHasIconColor && i <= 2) ? 'img-icon-color' : ''}  ${iconSize} py-2 `}
			alt={altTexts[i] ?? ''}
			src={isDevicon ? getDevicon(icon) : icon}
			loading={isLazy ? 'lazy' : 'eager'}
		/>
	{/each}
</div>
