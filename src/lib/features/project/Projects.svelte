<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import ButtonGroup from '$lib/components/ui/ButtonGroup.svelte';
	import {flip} from 'svelte/animate';
  	import {fade} from 'svelte/transition';
	import { index } from 'd3';

	let filteredProjects = PROJECTS;
	let filterOptions = ['All', ...new Set(PROJECTS.map((project) => project.applicationField))];
	let selectedFilter = 'All';

	const filterProjects = (filter: string) => {
		selectedFilter = filter;
		if (filter === 'All') {
			filteredProjects = PROJECTS;
		} else {
			filteredProjects = PROJECTS.filter((project) => project.applicationField === filter);
		}
	};
</script>

<SectionHeader  title="Projects" />

<div class="flex flex-row w-full justify-center mb-4 container">
	<ButtonGroup buttonOptions={filterOptions} bind:selectedOption={selectedFilter} onClickFunction={filterProjects} />
</div>

<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 overflow-hidden p-2 container" >
	{#each filteredProjects as projectElement, index (projectElement.id)}
	<div class="col-span-1" in:fade  >
		<Card extraClasses="bg-white" >
			<ProjectCard {projectElement} showImage={index<10} hasIconColor={false} />
		</Card>
	</div>
		
	{/each}
</div>
