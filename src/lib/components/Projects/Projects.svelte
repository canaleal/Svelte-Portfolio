<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectCard from '$lib/widgets/project/ProjectCard.svelte';
	import { afterUpdate } from 'svelte';

	let imageRefs: any = [];
	afterUpdate(() => {
		const slideInObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).style.opacity = '1';
					entry.target.classList.add('slide-in-bottom-fast');

					slideInObserver.unobserve(entry.target);
				}
			});
		});

		imageRefs.forEach((img: Element) => slideInObserver.observe(img));
	});
</script>

<div class="py-8 ">
	<SectionHeader id="projects" title="Projects" />
	<div
		class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 overflow-hidden py-2 px-8 container"
	>
		{#each PROJECTS.slice(0, 6) as projectElement, i}
			<div class="fade-in-card" bind:this={imageRefs[i]}>
				<Card colSize="col-span-1" speed={i + 5}>
					<ProjectCard {projectElement} showImage={projectElement.showImage} hasIconColor={false} />
				</Card>
			</div>
		{/each}
	</div>
</div>
