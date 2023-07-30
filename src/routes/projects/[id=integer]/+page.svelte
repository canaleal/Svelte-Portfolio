<script lang="ts">
	import Project from '$lib/features/project/Project.svelte';
	import OptionalContent from '$lib/features/project/OptionalContent.svelte';
	import type { IProjectType } from '$lib/types/project-types';

	export let data: any;
	let projectElement: IProjectType = data.projectElement;
</script>

<div class="py-8">
	<Project {projectElement} />
</div>

{#if projectElement.optionalContent}
	{#each projectElement.optionalContent as optionalContent, i}
		<div class={` ${i % 2 == 0 ? 'bg-dark-mode-shade' : ''} py-8`}>
			<OptionalContent {optionalContent} />
		</div>
	{/each}
{/if}
