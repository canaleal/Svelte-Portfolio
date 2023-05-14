<script lang="ts">
	import { getDevicon } from '$lib/utils/devicon-icons';

	export let icons: string[] = [];
	export let altTexts: string[] = [];
	export let hasIconColor = false;
	export let isDevicon = false;
</script>

<div class="flex flex-wrap">
	{#each icons as icon, i}
		<img
			height="100"
			width="auto"
			title={altTexts[i] ?? icon}
			class={`img-icon ${hasIconColor ? 'img-icon-color' : ''} w-8 mx-2 py-2 `}
			alt={altTexts[i] ?? ''}
			src={isDevicon ? getDevicon(icon) : icon}
			loading="lazy"
		/>
	{/each}
</div>
