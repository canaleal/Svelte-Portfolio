<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import ProjectButtons from '$lib/widgets/project/ProjectButtons.svelte';
	import ProjectDescription from '$lib/widgets/project/ProjectDescription.svelte';
	import ProjectIcons from '$lib/widgets/project/ProjectIcons.svelte';

	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectImage from '$lib/widgets/project/ProjectImage.svelte';
	import ProjectImages from '$lib/widgets/project/ProjectImages.svelte';
	import ProjectTitle from '$lib/widgets/project/ProjectTitle.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<section class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
	<Card colSize={'col-span-2'} isRounded={false}>
		<ProjectImage {projectElement} imageSize={'img-card-4xl'} />
	</Card>

	<div class="col-span-2  py-8 px-4 md:px-16 lg:px-16 flex flex-col ">
		<ProjectTitle {projectElement} />
		<hr class="my-4" />
		<div class="py-4">
			<ProjectDescription {projectElement} showEllipsis={false} />
		</div>
		<hr class="my-4" />

		<div class="py-4">
			<ProjectIcons icons={projectElement.tools} hasIconColor={true} />
		</div>
		<hr class="my-4" />

		<div class="pt-4">
			<ProjectButtons {projectElement} showMoreButton={false} />
		</div>
	</div>
</section>

<ProjectImages {projectElement} />
