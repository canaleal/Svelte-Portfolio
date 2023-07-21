<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	import Image from '$lib/components/ui/Image.svelte';

	export let projectElement: IProjectType;
</script>

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

		<div
			class="bg-dark-trans-lr w-full h-full absolute text-right top-0 right-0 p-4 rounded-bl-lg flex flex-col gap-2"
		>
			<p>{projectElement.applicationField}</p>

			<div class="mt-auto">
				<IconsBar
					icons={projectElement.tools}
					isDevicon={true}
					iconSize="w-6"
					hasIconColor={true}
					justify={'justify-end'}
				/>
			</div>
		</div>
	</Card>
</div>
