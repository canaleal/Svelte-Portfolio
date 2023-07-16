<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import ListView from '$lib/components/ui/ListView.svelte';
	import TextDescription from '$lib/components/ui/TextDescription.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import ProjectButtons from './ProjectButtons.svelte';

	export let projectElement: IProjectType;
	export let hasIconColor = true;
	export let isLargeTitle = false;
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
			<Image
				url={projectElement.exampleUrl || projectElement.githubUrl}
				imageUrl={projectElement.imageUrl}
			/>
			<div class="bg-overlay absolute top-0 right-0 p-4">
				<p>{projectElement.applicationField}</p>
			</div>

			<div class="bg-overlay absolute  flex flex-row gap-2 top-0 left-0 p-4">
				{#if projectElement.inDevelopment}
					<div class="w-4 h-4 rounded-full bg-error" />
				{:else}
					<div class="w-4 h-4 rounded-full bg-success" />
				{/if}
				<p class="text-white text-xs">
					{projectElement.inDevelopment ? 'In Development' : 'Complete'}
				</p>
			</div>
		</div>
	{/if}

	<div class={padding}>
		{#if isLargeTitle}
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

		<div class="mt-8">
			<ProjectButtons {projectElement} {showMoreButton} />
		</div>
	</div>

	{#if showIcons}
		<div class="mt-auto bg-smoke  py-4 px-8">
			<IconsBar
				icons={projectElement.tools}
				{hasIconColor}
				isDevicon={true}
				iconSize="w-6"
			/>
		</div>
	{/if}
</div>
