<script lang="ts">
	import GitLink from '../../components/GitLink.svelte';
	import { PROJECTS } from '../../data/projects';
	import Card from '../../widgets/card/Card.svelte';
	import ProjectCard from '../../widgets/card/ProjectCard.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
</script>

<SectionHeader title="Projects" />

<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-8 py-8 px-8  overflow-hidden">
	{#each PROJECTS as projectElement, i}
		<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={i}>
			<ProjectCard {projectElement} />
		</Card>
	{/each}

</div>
