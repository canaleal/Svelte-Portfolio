<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import ButtonGroup from '$lib/components/ui/ButtonGroup.svelte';
	import { fade } from 'svelte/transition';
	import type { IProjectFilter } from '$lib/types/project-types';
	import { ALL } from '$lib/constants';
	import Grid from '$lib/layouts/Grid.svelte';

	let filteredProjects = PROJECTS;
	let filterOptions: IProjectFilter[] = [
		ALL,
		...new Set(PROJECTS.map((project) => project.applicationField)),
		...new Set(PROJECTS.map((project) => project.projectCompletion))
	];
	let selectedFilter = ALL;

	const filterProjects = (filter: string) => {
		selectedFilter = filter;
		if (filter === ALL) {
			filteredProjects = PROJECTS;
		} else {

			filteredProjects = PROJECTS.filter(
				(project) => project.applicationField === filter || project.projectCompletion === filter
			);
		}
	};
</script>

<SectionHeader title="Projects" />

<Grid>
	{#each filteredProjects as projectElement, index (projectElement.id)}
		<div class="col-span-1" in:fade>
			<Card extraClasses="bg-white">
				<ProjectCard {projectElement} showImage={index < 10} hasIconColor={true} />
			</Card>
		</div>
	{/each}
</Grid>
