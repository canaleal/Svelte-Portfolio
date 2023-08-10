<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import ListView from '$lib/components/ui/ListView.svelte';
	import TextDescription from '$lib/components/ui/TextDescription.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import ProjectButtons from './ProjectButtons.svelte';
	import Card from '../card/Card.svelte';

	export let projectElement: IProjectType;
	export let hasIconColor = false;
	export let isLargeTitle = false;
	export let showImage = false;
	export let showIcons = true;
	export let hasEllipsis = true;
	export let showMoreButton = true;
	export let showListView = false;
	export let isCard = true;
	export let padding = isCard ? 'px-8 py-8' : 'py-4';

	let listItems = [
		projectElement.size,
		projectElement.applicationField,
		projectElement.projectCompletion
	];
</script>

<div class="flex flex-col h-full ">
	{#if showImage && projectElement.imageUrl}
		<Card isOverflowHidden={true} extraClasses="relative">
			<Image imageUrl={projectElement.imageUrl} imageSize={'img-card-md'} />
		</Card>
	{/if}

	<div class={padding}>
		<p class={isLargeTitle ? 'text-title' : 'text-subtitle'}>{projectElement.title}</p>
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
		<div class="mt-auto bg-smoke py-4 px-8">
			<IconsBar icons={projectElement.tools} {hasIconColor} isDevicon={true} iconSize="w-5" />
		</div>
	{/if}
</div>
