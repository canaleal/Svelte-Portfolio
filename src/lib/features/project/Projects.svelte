<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		const cardRefs = document.querySelectorAll('.fade-in-card');
		const slideInObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).style.opacity = '1';

					slideInObserver.unobserve(entry.target);
				}
			});
		});

		cardRefs.forEach((img: Element) => slideInObserver.observe(img));
	});
</script>

<SectionHeader id="projects" title="Projects" />
<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 overflow-hidden p-2 container">
	{#each PROJECTS as projectElement}
		<Card extraClasses="fade-in-card bg-white">
			<ProjectCard {projectElement} showImage={projectElement.showImage} hasIconColor={false} />
		</Card>
	{/each}
</div>
