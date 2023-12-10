<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import type { IProject } from './types';

	export let project: IProject;
</script>

<div
	class="grid grid-cols-12 p-8 hover:bg-dark bg-opacity-10 rounded-lg transition-all duration-200"
>
	<div class="col-span-4">
		<img
			src={project.image}
			alt={project.title}
			class="rounded-lg w-40 h-24 object-cover border border-zinc-600"
			loading="lazy"
			width="200"
			height="48"
			decoding="async"
		/>
	</div>

	<div class="col-span-8 flex flex-col">
		<Link
			link={project.githubLink}
			text={project.title}
			icon="fa-solid fa-arrow-up-right-from-square"
			extraClasses="text-md font-medium text-white hover:text-indigo-400"
		/>
		<p class="text-sm mt-2">{project.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			{#if project.stars}
				<p class="text-sm font-medium  text-indigo-400  hover:text-teal-400 duration-200">
					<span class="fa fa-star" />
					{project.stars}
				</p>
			{/if}
			{#if project.downloads}
				<p class="text-sm font-medium  text-indigo-400  hover:text-teal-400 duration-200">
					<span class="fa fa-download" />
					{project.downloads}
				</p>
			{/if}
			{#if project.awards}
				{#each project.awards as award}
					<p class="text-sm font-medium  text-indigo-400  hover:text-teal-400 duration-200">
						<span class="fa fa-trophy" />
						{award}
					</p>
				{/each}
			{/if}
		</div>

		<TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
	</div>
</div>
