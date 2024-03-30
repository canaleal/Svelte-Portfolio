<script lang="ts">
	import HighlightedText from '$lib/components/elements/highlightedText.svelte';
	import { formatNumber } from '$lib/utils/text-format';
	import type { IProject } from '../types';

	export let project: IProject;
	export let extraClasses = '';
</script>

{#if project.stars || project.downloads || (project.awards && project.awards.length > 0)}
	<div class="flex flex-row gap-4 flex-wrap {extraClasses}">
		{#if project.stars}
			<HighlightedText>
				<span class="fa fa-star" />
				{formatNumber(project.stars)}
			</HighlightedText>
		{/if}
		{#if project.downloads}
			<HighlightedText>
				<span class="fa fa-download" />
				{formatNumber(project.downloads)}
			</HighlightedText>
		{/if}
		{#if project.awards}
			{#each project.awards as award}
				<HighlightedText>
					<span class="fa fa-trophy" />
					{award}
				</HighlightedText>
			{/each}
		{/if}
	</div>
{/if}
