<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import Grid from '$lib/layouts/Grid.svelte';
</script>

<SectionHeader title="Projects" />

<Grid>
	{#each PROJECTS as projectElement, index (projectElement.id)}
		<div class="col-span-1" >
			<Card extraClasses="bg-white">
				<ProjectCard {projectElement} showImage={index < 10} hasIconColor={false} />
			</Card>
		</div>
	{/each}
</Grid>
