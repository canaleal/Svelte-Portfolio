<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import { PROJECTS } from '$lib/data/projects';
	import Grid from '$lib/layouts/Grid.svelte';
</script>

<Grid lgGridColSpan={2}>
	{#each PROJECTS as projectElement, index (projectElement.id)}
		<Card extraClasses="bg-white hidden-animation hidden-animation-bottom delay-with-var" style={`--delay: ${index * 150}ms`}>
			<ProjectCard {projectElement} showImage={index < 4} />
		</Card>
	{/each}
</Grid>
