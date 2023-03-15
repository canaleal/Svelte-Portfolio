<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';

	export let projectElement: IProjectType;
	export let showMoreButton = true;
</script>

<div class="flex flex-row gap-4 ">
	{#if projectElement.githubUrl}
		<a
			href={projectElement.githubUrl}
			target="_blank"
			rel="noreferrer"
			class="card-btn card-btn-blue  rounded-lg"><i class="fa-solid fa-code mr-2" />Code</a
		>
	{/if}

	{#if projectElement.exampleUrl}
		<a
			href={projectElement.exampleUrl}
			target={projectElement.exampleUrl.includes('http') ? '_blank' : ''}
			rel="noreferrer"
			class="card-btn  rounded-lg"><i class="fa-solid fa-eye mr-2" />Demo</a
		>
	{/if}

	{#if showMoreButton}
		<a href={`/projects/${projectElement.id}`} rel="noreferrer" class="card-btn rounded-lg"
			><i class="fa-solid fa-plus mr-2" />More</a
		>
	{/if}
</div>
