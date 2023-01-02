<script lang="ts">
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
	import { PROJECTS } from '../../data/projects';
	import ProjectCard from '../../widgets/card/ProjectCard.svelte';
	import Card from '../../widgets/card/Card.svelte';

</script>

<section>
	<SectionHeader title="Projects" color="bg-primary" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-4 py-8 px-4">
		{#each PROJECTS as projectElement}
			<Card colSize="col-span-1">
				<ProjectCard {projectElement} />
			</Card>
		{/each}
	</div>

</section>
