<script lang="ts">
	import OptionalContent from '$lib/components/Projects/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	import ImageLink from '$lib/widgets/ImageLink.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectCard from '$lib/widgets/project/ProjectCard.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<section class="overflow-hidden px-8 py-8  container">
	<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
		<div class="col-span-1">
			<ProjectCard
				isCard={false}
				isH2Title={true}
				{projectElement}
				showImage={false}
				showMoreButton={false}
				hasEllipsis={false}
				showListView={true}
				showIcons={false}
			/>
		</div>
		<div class="col-span-2">
			<ImageLink
				url={projectElement.exampleUrl || projectElement.githubUrl}
				imageUrl={projectElement.imageUrl}
				imageSize={'img-card-2xl'}
			/>
		</div>
	</div>
</section>

{#if projectElement.optionalContent}
	{#each projectElement.optionalContent as optionalContent, i}
		{#if i % 2 == 0}
			<div class="bg-smoke">
				<OptionalContent {optionalContent} />
			</div>
		{:else}
			<OptionalContent {optionalContent} />
		{/if}
	{/each}
{/if}
