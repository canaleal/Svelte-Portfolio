<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import ImageLink from '$lib/widgets/ImageLink.svelte';
	import ProjectCard from '$lib/widgets/card/ProjectCard.svelte';
	import ProjectImages from '$lib/widgets/project/ProjectImages.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
	<div class="col-span-1  ">
		<ProjectCard
			isH1Title={true}
			{projectElement}
			showImage={false}
			showMoreButton={false}
			hasEllipsis={false}
			hasIconColor={true}
			showListView={true}
		/>
	</div>
	<div class="col-span-3">
		<ImageLink url={projectElement.exampleUrl || projectElement.githubUrl} imageUrl={projectElement.imageUrl} imageSize={"img-card-4xl"}/>
	</div>
</div>

<ProjectImages {projectElement} />
