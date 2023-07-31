<script lang="ts">
	import { getDevicon } from '$lib/utils/devicon-icons';

	export let icons: string[] = [];
	export let altTexts: string[] = [];
	export let iconSize = 'w-4';
	export let hasIconColor = false;
	export let isDevicon = false;
	export let isLazy = true;
	export let justify = 'justify-start';
	export let isStaggerDelay = false;
</script>

<div class="flex flex-wrap {justify} gap-4">
	{#each icons.slice(0,5) as icon, i}
		<img
			height="100"
			width="auto"
			title={altTexts[i] ?? icon}
			class={`img-icon ${hasIconColor ? 'img-icon-color' : ''}  ${iconSize}  ${isStaggerDelay ? "hidden-animation hidden-animation-left delay-with-var" : "" } `}
			alt={altTexts[i] ?? ''}
			src={isDevicon ? getDevicon(icon) : icon}
			loading={isLazy ? 'lazy' : 'eager'}
			style={isStaggerDelay ? `--delay: ${i * 150}ms` : ''}
		/>
	{/each}
</div>
