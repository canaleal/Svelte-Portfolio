<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import ProjectButtons from '$lib/features/project/components/ProjectButtons.svelte';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';

	import { PROJECTS } from '$lib/data/projects';
	import Grid from '$lib/layouts/Grid.svelte';
	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';
</script>

<section id="projects" class="bg-white py-16 z-2">
	<Grid lgGridColSpan={2}>
		{#each PROJECTS as projectElement, index (projectElement.id)}
		
			<Card
				extraClasses="bg-white hidden-animation hidden-animation-bottom delay-with-var"
				style={`--delay: ${index * 150}ms`}
			>
				<ImageContainer imageUrl={projectElement.imageUrl} imageSize={'img-card-md'} />

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
	</Grid>
</section>
