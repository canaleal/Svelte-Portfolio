<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';

	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectImage from '$lib/widgets/project/ProjectImage.svelte';
	import ProjectImages from '$lib/widgets/project/ProjectImages.svelte';
	import ProjectCard from '$lib/widgets/card/ProjectCard.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
	<div class="col-span-1  flex flex-col ">
		<ProjectCard isLargeTitle={true} isDark={true} {projectElement} showImage={false} showMoreButton={false}/>
	</div>
	<Card colSize={'col-span-3'} isRounded={false}>
		<ProjectImage {projectElement} imageSize={'img-card-2xl'} />
	</Card>

	
</div>

<ProjectImages {projectElement} />
