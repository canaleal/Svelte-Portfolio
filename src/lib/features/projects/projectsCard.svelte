<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import type { IProject } from './types';
	import { projectStore } from './store/projectStore';
	import AwardsBar from './widgets/projectAwardsBar.svelte';
	import ProjectLinksBar from './widgets/projectLinksBar.svelte';

	export let project: IProject;
	const selectProject = () => {
		projectStore.setSelectedProject(project);
	};
</script>

<div class="flex gap-4 p-8 hover:bg-dark-hover bg-opacity-10 rounded-lg duration-200">
	<div class="flex-1" on:click={() => selectProject()} on:keydown={() => {}}>
		<img
			src={project.image}
			alt={project.title}
			class="rounded-lg w-40 h-24 object-cover border border-zinc-600 hover:cursor-pointer"
			loading="lazy"
			width="200"
			height="48"
			decoding="async"
		/>
	</div>

	<div class="flex-2 flex flex-col">
		<ProjectLinksBar project={project} />
		<p class="text-sm mt-2">{project.description}</p>
		<AwardsBar {project} extraClasses="mt-4" />
		<TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
	</div>
</div>
