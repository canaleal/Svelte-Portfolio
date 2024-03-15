<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import type { IProject } from './types';
	import { projectStore } from './store/projectStore';
	import AwardsBar from './widgets/projectAwardsBar.svelte';

	export let project: IProject;
	const selectProject = () => {
		projectStore.setSelectedProject(project);
	};
</script>

<div class="grid grid-cols-12 gap-4 p-8 hover:bg-dark-hover bg-opacity-10 rounded-lg duration-200">
	<div class="col-span-4" on:click={() => selectProject()} on:keydown={() => {}}>
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

	<div class="col-span-8 flex flex-col">
		<Link link={project.githubLink}>
			<span class="fa-solid fa-arrow-up-right-from-square" />
			{project.title}
		</Link>
		<p class="text-sm mt-2">{project.description}</p>
		<AwardsBar {project} extraClasses="mt-4" />
		<TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
	</div>
</div>
