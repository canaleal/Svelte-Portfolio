<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '../Icons.svelte';
	import TextDescription from '../TextDescription.svelte';
	import Underline from '../Underline.svelte';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';

	export let showMoreButton = true;
	export let projectElement: IProjectType;
	export let showImage = true;
</script>

<div class="flex flex-col h-full ">
	{#if showImage}
		<ProjectImage {projectElement} />
	{/if}

	<div class="px-8 py-4">
		<p class="text-xl">{projectElement.title}</p>
		<div class="py-4"><Underline /></div>

		<TextDescription text={projectElement.description} />
	</div>

	<div class="px-8 py-4">
		<ProjectButtons {projectElement} showMoreButton={showMoreButton} />
	</div>

	

	<div class="bg-smoke  p-4 mt-auto">
		<IconsBar icons={projectElement.tools} hasIconColor={false} isDevicon={true} />
	</div>
</div>
