<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import type { IProjectType } from '$lib/types/project-types';
	import Grid from '$lib/layouts/Grid.svelte';
	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';
	import TextDescription from '$lib/components/ui/TextDescription.svelte';
	import ListView from '$lib/components/ui/ListView.svelte';
	import ProjectButtons from '$lib/features/project/components/ProjectButtons.svelte';

	export let projectElement: IProjectType;

	let listItems = [
		projectElement.size,
		projectElement.applicationField,
		projectElement.projectCompletion
	];
</script>

<Grid isOverflowHidden={false}>
	<Card hasShadow={false} extraClasses="col-span-1  hidden-animation hidden-animation-left">
		<p class="text-title  mb-4">{projectElement.title}</p>
		<TextDescription text={projectElement.description} />

		<div class="py-4">
			<ListView items={listItems} />
		</div>

		<div class="mt-8">
			<ProjectButtons {projectElement} showMoreButton={false} />
		</div>
	</Card>

	<Card
		isOverflowHidden={true}
		extraClasses="relative hidden-animation hidden-animation-right col-span-2"
	>
		<ImageContainer imageUrl={projectElement.imageUrl} imageSize={'img-card-xl'} />

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
