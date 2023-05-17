<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import IconsBar from '$lib/widgets/Icons.svelte';

	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectImage from '$lib/widgets/project/ProjectImage.svelte';
	import ProjectImages from '$lib/widgets/project/ProjectImages.svelte';
	import TextTitle from '$lib/widgets/TextTitle.svelte';
	import TextDescription from '$lib/widgets/TextDescription.svelte';
	import Button from '$lib/widgets/Button.svelte';
	import ProjectButtons from '$lib/widgets/project/ProjectButtons.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
	import ProjectCard from '$lib/widgets/card/ProjectCard.svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
	<Card colSize={'col-span-2'} isRounded={false}>
		<ProjectImage {projectElement} imageSize={'img-card-4xl'} />
	</Card>

	<div class="col-span-2  py-8 px-4 md:px-16 lg:px-16 flex flex-col ">
		<Card colSize={'col-span-2'} isRounded={true} noHover={true}>
			<ProjectCard {projectElement} showImage={false} />
		</Card>
	</div>
</div>

<ProjectImages {projectElement} />
