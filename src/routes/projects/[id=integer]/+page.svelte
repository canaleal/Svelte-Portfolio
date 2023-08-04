<script lang="ts">
	import Project from '$lib/features/project/Project.svelte';
	import OptionalContent from '$lib/features/project/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';
	import { onMount } from 'svelte';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;

	let hiddenElements: NodeListOf<Element> | Element[] = [];
	onMount(() => {
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

<div class="py-8">
	<Project {projectElement} />
</div>

{#if projectElement.optionalContent}
	{#each projectElement.optionalContent as optionalContent, i}
		<div class={` ${ optionalContent.bgColor ?? (i % 2 == 0 ? 'bg-smoke' : '')} py-8`}>
			<OptionalContent {optionalContent} />
		</div>
	{/each}
{/if}
