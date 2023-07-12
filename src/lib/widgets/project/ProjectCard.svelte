<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '../IconsBar.svelte';
	import ImageLink from '../ImageLink.svelte';
	import ListView from '../ListView.svelte';
	import TextDescription from '../TextDescription.svelte';
	import Underline from '../Underline.svelte';
	import ProjectButtons from './ProjectButtons.svelte';

	export let projectElement: IProjectType;
	export let hasIconColor = true;
	export let isH2Title = false;
	export let showImage = false;
	export let showIcons = true;
	export let hasEllipsis = true;
	export let showMoreButton = true;
	export let showListView = false;
	export let isCard = true;
	export let padding = isCard ? 'px-8 py-4' : 'py-4';

	let listItems = [
		projectElement.size,
		projectElement.applicationField,
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
			<div class="overlay top-0 right-0 p-4">
				<p>{projectElement.applicationField}</p>
			</div>

			<div class="overlay  flex flex-row gap-2 top-0 left-0 p-4">
		
				{#if projectElement.inDevelopment}
					<div class="w-4 h-4 rounded-full bg-error" />
				{:else}
					<div class="w-4 h-4 rounded-full bg-success" />
				{/if}
				<p class="text-white text-xs">{projectElement.inDevelopment ? 'In Development' : 'Complete'}</p>
			</div>
				
		</div>
	{/if}

	<div class={padding}>
		{#if isH2Title}
			<p class="text-title">{projectElement.title}</p>
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
		<div class={padding}>
			<ProjectButtons {projectElement} {showMoreButton} />
		</div>

		{#if showIcons}
		<div class="bg-smoke  py-4 px-8">
			<IconsBar firstHasIconColor={true} icons={projectElement.tools} {hasIconColor} isDevicon={true} iconSize="w-6" />
		</div>
		{/if}
	</div>
</div>
