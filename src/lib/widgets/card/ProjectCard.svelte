<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '../Icons.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';
	import TextDescription from '../TextDescription.svelte';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import Underline from '../Underline.svelte';

	export let isLargeTitle = false;
	export let isDark = false;
	export let showMoreButton = true;
	export let projectElement: IProjectType;
	export let showImage = true;
</script>

<div class="flex flex-col h-full {isDark ? 'bg-dark text-white' : ''}">
	{#if showImage}
		<ProjectImage {projectElement} />
	{/if}

	<div class="px-8 py-4">
		{#if isLargeTitle}
			<h2>{projectElement.title}</h2>
		{:else}
			<p class="text-xl">{projectElement.title}</p>
		{/if}
		<div class="py-4"><Underline /></div>

		<TextDescription text={projectElement.description} />
	</div>

	<div class="px-8 py-4">
		<ProjectButtons {projectElement} showMoreButton={showMoreButton} />
	</div>

	<div class="{isDark ? 'bg-dark-light' : ''}  p-4 mt-auto">
		<IconsBar icons={projectElement.tools} hasIconColor={true} isDevicon={true} />
	</div>
</div>
