<script lang="ts">
	import Project from '$lib/features/project/Project.svelte';
	import OptionalContent from '$lib/features/project/OptionalContent.svelte';
	import type { IProjectType } from '$lib/features/project/types/project-types';
	import { onMount } from 'svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;

	let hiddenElements: NodeListOf<Element> | Element[] = [];
	onMount(() => {
		window.scrollTo(0, 0);
		hiddenElements = document.querySelectorAll('.hidden-animation');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show-animation');
				}
			});
		});
		hiddenElements.forEach((img: Element) => observer.observe(img));
	});
</script>

<Project {projectElement} />

{#if projectElement.optionalContent}
	{#each projectElement.optionalContent as optionalContent, i}
		<OptionalContent {optionalContent} index={i} />
	{/each}
{/if}
