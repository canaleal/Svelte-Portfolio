<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '../Icons.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';
	import TextTitle from '../TextTitle.svelte';
	import TextDescription from '../TextDescription.svelte';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import Underline from '../Underline.svelte';
	export let projectElement: IProjectType;
	export let showImage = true;
</script>

<div class="flex flex-col">
	{#if showImage}
		<ProjectImage {projectElement} />
	{/if}
	<div class="p-4">
		<TextTitle title={projectElement.title} />

		<div class="py-4"><Underline /></div>

		<TextDescription text={projectElement.description} />
	</div>

	<hr />

	<div class="p-4">
		<ProjectButtons {projectElement} showMoreButton={true} />
	</div>

	<div class="bg-dark  p-4 ">
		<IconsBar icons={projectElement.tools} hasIconColor={true} isDevicon={true} />
	</div>
</div>
