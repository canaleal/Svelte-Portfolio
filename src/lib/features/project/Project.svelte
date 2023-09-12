<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import type { IProjectType } from '$lib/features/project/types/project-types';

	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';
	import ProjectButtons from '$lib/features/project/components/ProjectButtons.svelte';

	export let projectElement: IProjectType;

	let listItems = [
		projectElement.size,
		projectElement.applicationField,
		projectElement.projectCompletion
	];
</script>

<div class="bg-white py-16">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-2 container  ">
		<Card hasShadow={false} extraClasses="col-span-1  hidden-animation hidden-animation-left">
			<p class="text-title  mb-4">{projectElement.title}</p>
			<p>{projectElement.description}</p>

			<ul class="list-disc">
				{#each listItems as item}
					<li>{item}</li>
				{/each}
			</ul>


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
	</div>
</div>
