<script lang="ts">
	import Project from '$lib/features/project/Project.svelte';
	import OptionalContent from '$lib/features/project/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<Project {projectElement} />

{#if projectElement.optionalContent}
	{#each projectElement.optionalContent as optionalContent, i}
		<div class={` slide-in-bottom-slow  ${i % 2 == 0 ? 'bg-smoke' : ''}`}>
			<OptionalContent {optionalContent} />
		</div>
	{/each}
{/if}
