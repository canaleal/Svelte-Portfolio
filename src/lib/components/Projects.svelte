<script>
	import { PROJECTS } from "$lib/data/projects";
	import SectionHeader from "$lib/widgets/SectionHeader.svelte";
	import Card from "$lib/widgets/card/Card.svelte";
	import ProjectCard from "$lib/widgets/card/ProjectCard.svelte";
	
</script>

<SectionHeader title="Projects" />

<div id="projects" class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-8 py-8 px-8  overflow-hidden">
	{#each PROJECTS as projectElement, i}
		<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={i}>
			<ProjectCard {projectElement} />
		</Card>
	{/each}
</div>