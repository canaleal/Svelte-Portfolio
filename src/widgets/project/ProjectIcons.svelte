<script lang="ts">
	import type { IProjectType } from '../../types/project-types';
	import { getDevicon } from '../../utils/devicon-icons';

	export let projectElement: IProjectType;
	export let showTitle = false;
	export let hasIconColor = false;
</script>

{#if showTitle}
	<p class="font-bold">Tools:</p>
{/if}

<div class="flex flex-wrap">
	{#each projectElement.tools as icon}
		<img
			height="100"
			width="auto"
			title={icon}
			class={`img-icon ${hasIconColor ? 'img-icon-color' : ''} w-8 mx-2 py-2 `}
			alt=""
			src={getDevicon(icon)}
			loading="lazy"
		/>
	{/each}
</div>
