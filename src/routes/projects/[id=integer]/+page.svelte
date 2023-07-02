<script lang="ts">
	import OptionalContent from '$lib/components/Projects/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	import ImageLink from '$lib/widgets/ImageLink.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectCard from '$lib/widgets/project/ProjectCard.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<section class="overflow-hidden ">
	<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 px-8 py-8  container">
		<div class="col-span-1 slide-in-left-slow">
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
		<div class="col-span-2 slide-in-right-slow">
			<ImageLink
				url={projectElement.exampleUrl || projectElement.githubUrl}
				imageUrl={projectElement.imageUrl}
				imageSize={'img-card-xl'}
			/>
		</div>
	</div>

	{#if projectElement.optionalContent}
		{#each projectElement.optionalContent as optionalContent, i}
			<div class={` slide-in-bottom-slow ${i % 2 == 0 ? 'bg-smoke' : ''}`}>
				<OptionalContent {optionalContent} />
			</div>
		{/each}
	{/if}
</section>
