<script lang="ts">
	import { PROJECTS } from '$lib/data/projects';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import ProjectCard from '$lib/widgets/card/ProjectCard.svelte';
	import { afterUpdate } from 'svelte';

	let imageRefs: any = [];
	afterUpdate(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).style.opacity = '1';
					entry.target.classList.add('slide-in-bottom-fast');
					
					
					observer.unobserve(entry.target);
				}
			});
		});

		imageRefs.forEach((img: Element) => observer.observe(img));
	});
</script>

<SectionHeader title="Projects" />
<div
	id="projects"
	class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-4  gap-8 overflow-hidden px-8 container"
>
	{#each PROJECTS as projectElement, i}
		<div class="fade-in-card" bind:this={imageRefs[i]}>
			<Card colSize="col-span-1"  speed={i + 5}>
				<ProjectCard {projectElement} showImage={projectElement.showImage} hasIconColor={false} />
			</Card>
		</div>
	{/each}
</div>
