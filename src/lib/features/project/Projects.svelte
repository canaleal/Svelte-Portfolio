<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';

</script>

<SectionHeader id="projects" title="Projects" />
<div
	class="js-trans  grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 overflow-hidden p-2 container"
>
	{#each PROJECTS as projectElement, i}
		
			<Card extraClasses="bg-white ">
				<ProjectCard {projectElement} showImage={projectElement.showImage} hasIconColor={false} />
			</Card>
	
	{/each}
</div>
