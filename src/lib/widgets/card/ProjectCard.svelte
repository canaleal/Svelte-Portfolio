<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '../Icons.svelte';
	import TextDescription from '../TextDescription.svelte';
	import Underline from '../Underline.svelte';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';

	export let projectElement: IProjectType;
	export let hasIconColor = false;
	export let isH1Title = false;
	export let showImage = true;
	export let hasEllipsis = true;
	export let showMoreButton = true;
</script>

<div class="flex flex-col h-full ">
	{#if showImage}
		
			<ProjectImage {projectElement} />
		
	{/if}

	<div class="px-8 py-4">
		{#if isH1Title}
			<h1>{projectElement.title}</h1>
		{:else}
			<h4>{projectElement.title}</h4>
		{/if}
		<div class="py-4"><Underline /></div>

		<TextDescription text={projectElement.description} bind:hasEllipsis />
	</div>

	<div class="mt-auto">
		<div class="px-8 py-4 ">
			<ProjectButtons {projectElement} {showMoreButton} />
		</div>

		<div class="bg-smoke  py-4 px-8">
			<IconsBar icons={projectElement.tools} hasIconColor={hasIconColor} isDevicon={true} />
		</div>
	</div>
</div>
