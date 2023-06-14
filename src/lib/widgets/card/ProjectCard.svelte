<script lang="ts">
	import { ApplicationField, ProjectSize, type IProjectType } from '$lib/types/project-types';
	import IconsBar from '../Icons.svelte';
	import ImageLink from '../ImageLink.svelte';
	import ListView from '../ListView.svelte';
	import TextDescription from '../TextDescription.svelte';
	import Underline from '../Underline.svelte';
	import ProjectButtons from '../project/ProjectButtons.svelte';

	export let projectElement: IProjectType;
	export let hasIconColor = true;
	export let isH2Title = false;
	export let showImage = false;
	export let hasEllipsis = true;
	export let showMoreButton = true;
	export let showListView = false;

	let listItems = [
		ProjectSize[projectElement.size],
		ApplicationField[projectElement.applicationField],
		projectElement.inDevelopment ? 'In Development' : 'Complete'
	];
</script>

<div class="flex flex-col h-full ">
	{#if showImage && projectElement.imageUrl}
		<div class="relative ">
			<ImageLink
				url={projectElement.exampleUrl || projectElement.githubUrl}
				imageUrl={projectElement.imageUrl}
			/>
			<div class="overlay overlay-rounded p-4">
				<p>{projectElement.applicationField}</p>
			</div>
		</div>
	{/if}

	<div class="px-8 py-4">
		{#if isH2Title}
			<h3>{projectElement.title}</h3>
		{:else}
			<p class="text-subtitle">{projectElement.title}</p>
		{/if}
		<Underline isRounded={false} />

		<TextDescription text={projectElement.description} {hasEllipsis} />

		{#if showListView}
			<div class="py-4">
				<ListView items={listItems} />
			</div>
		{/if}
	</div>

	<div class="mt-auto">
		<div class="px-8 py-4 ">
			<ProjectButtons {projectElement} {showMoreButton} />
		</div>

		<div class="bg-smoke  py-4 px-8">
			<IconsBar icons={projectElement.tools} {hasIconColor} isDevicon={true} iconSize="w-6" />
		</div>
	</div>
</div>
