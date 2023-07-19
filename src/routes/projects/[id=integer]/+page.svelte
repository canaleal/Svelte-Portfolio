<script lang="ts">
	import OptionalContent from '$lib/features/project/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	import Image from '$lib/components/ui/Image.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import Card from '$lib/components/card/Card.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<section class="overflow-hidden ">
	<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  py-8  container">
		<Card extraClasses=" slide-in-left-slow" hasShadow={false}>
			<ProjectCard
				isCard={false}
				isLargeTitle={true}
				{projectElement}
				showImage={false}
				showMoreButton={false}
				hasEllipsis={false}
				showListView={true}
				showIcons={false}
			/>
		</Card>

		<Card extraClasses="relative slide-in-right-slow" colSize={'col-span-2'} isOverflowHidden={true}>
			<Image imageUrl={projectElement.imageUrl} imageSize={'img-card-xl'} />

			<div class="bg-dark-trans absolute  top-0 right-0 p-4 rounded-bl-lg">
				<p>{projectElement.applicationField}</p>
			</div>
		</Card>
	</div>

	{#if projectElement.optionalContent}
		{#each projectElement.optionalContent as optionalContent, i}
			<div class={` slide-in-bottom-slow p-8 ${i % 2 == 0 ? 'bg-smoke' : ''}`}>
				<OptionalContent {optionalContent} />
			</div>
		{/each}
	{/if}
</section>
