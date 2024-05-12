<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import type { IProject } from './types';
	import { projectStore } from './store/projectStore';
	import AwardsBar from './widgets/projectAwardsBar.svelte';
	import Link from '$lib/components/form/link.svelte';

	export let project: IProject;
	const selectProject = () => {
		projectStore.setSelectedProject(project);
	};
</script>

<div class="flex flex-col md:flex-row gap-4 cursor-hover-trigger">
	<div class="flex-1 hidden md:flex" on:click={selectProject} on:keydown={() => {}}>
		<img
			src={project.image}
			alt={project.title}
			class="rounded-md w-[10rem] h-[6rem] object-cover shadow-md  hover:cursor-pointer"
			loading="lazy"
			width="200"
			height="48"
			decoding="async"
		/>
	</div>

	<div class="flex-3 flex flex-col">
		{#if project.projectLink}
			<Link link={project.projectLink}>
				<span class="fa-solid fa-arrow-up-right-from-square" />
				{`${project.title}`}
			</Link>
		{:else if project.githubLink}
			<Link link={project.githubLink}>
				<span class="fa-brands fa-github" />
				{`${project.title}`}
			</Link>
		{/if}
		<p class="text-sm mt-4">{project.description}</p>
		<AwardsBar {project} extraClasses="mt-4" />
		<TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
	</div>
</div>
