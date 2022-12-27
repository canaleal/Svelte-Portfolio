<script lang="ts">
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
	import { sortAscending } from '../../utils/sorting-utils';
	import { PROJECTS } from '../../data/projects';
	import ProjectCard from '../../widgets/ProjectCard.svelte';

	// let notInDevelopmentProjects = PROJECTS.filter((project) => !project.inDevelopment);
	// notInDevelopmentProjects = sortAscending(notInDevelopmentProjects, 'title')
	// let inDevelopmentProjects = PROJECTS.filter((project) => project.inDevelopment);
</script>

<section>
	<SectionHeader title="Projects" color="bg-blue" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-4 py-8 px-4">
		{#each PROJECTS as projectElement}
			<ProjectCard {projectElement} />
		{/each}
	</div>

	<!-- <SectionHeader title="In Development Projects" color="bg-green" />
	<div id="projects" class="grid  grid-cols-1 lg:grid-cols-4  gap-4 py-8 px-4">
		{#each inDevelopmentProjects as projectElement}
			<ProjectCard {projectElement} />
		{/each}
	</div> -->
</section>
