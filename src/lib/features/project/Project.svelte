<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import type { IProjectType } from '$lib/types/project-types';
	import Grid from '$lib/layouts/Grid.svelte';
	import Image from '$lib/components/ui/Image.svelte';

	export let projectElement: IProjectType;
</script>

<Grid isOverflowHidden={false}>
	<Card hasShadow={false} extraClasses="col-span-1  hidden-animation hidden-animation-left">
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

	<Card
		isOverflowHidden={true}
		extraClasses="relative hidden-animation hidden-animation-right col-span-2"
	>
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
</Grid>
