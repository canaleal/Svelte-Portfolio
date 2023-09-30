<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import ProjectButtons from '$lib/features/project/components/ProjectButtons.svelte';

	import { PROJECTS } from '$lib/features/project/data/projects';

	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';
</script>

<section id="projects" class="bg-smoke py-16 z-2">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  p-2 container  ">
		{#each PROJECTS as projectElement, index (projectElement.id)}
			<Card
				extraClasses="bg-white hidden-animation  delay-with-var"
				style={`--delay: ${index * 150}ms`}
			>
				<div class="overflow-hidden relative">
					<ImageContainer
						scaleOnHover={true}
						imageUrl={projectElement.imageUrl}
						imageSize={'img-card-md'}
					/>

					{#if projectElement.projectCompletion === 'In Development'}
						<div class="flex flex-col absolute top-0 right-0 p-2 bg-red-600 bg-opacity-80 text-white rounded-bl-md">
							<p>In Development</p>
						</div>
					{/if}
				</div>

				<div class="px-8 py-8">
					<p class="text-subtitle mb-4">{projectElement.title}</p>
					<p class="ellipsis">{projectElement.description}</p>
					<div class="mt-8">
						<ProjectButtons {projectElement} showMoreButton={true} />
					</div>
				</div>

				<div class="mt-auto bg-smoke py-4 px-8">
					<IconsBar
						icons={projectElement.tools}
						hasIconColor={true}
						isDevicon={true}
						iconSize="w-5"
					/>
				</div>
			</Card>
		{/each}
	</div>
</section>
