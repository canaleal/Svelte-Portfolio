<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import Button from '$lib/components/ui/Button.svelte';

	export let projectElement: IProjectType;
	export let showMoreButton = false;
</script>

<div class="flex flex-row gap-4">
	{#if projectElement.githubUrl}
		<Button
			url={projectElement.githubUrl}
			text="Code"
			icon="fa-solid fa-code"
			label={projectElement.githubUrl}
		/>
	{/if}

	{#if showMoreButton}
		<Button
			url={projectElement.showMoreUrl ?? `/projects/${projectElement.title}`}
			text="Details"
			icon="fa-solid fa-plus"
			label={projectElement.exampleUrl}
		/>
	{/if}

	{#if projectElement.exampleUrl}
		<Button
			url={projectElement.exampleUrl}
			text="Demo"
			icon="fa-solid fa-eye"
			label={projectElement.exampleUrl}
		/>
	{/if}
</div>
