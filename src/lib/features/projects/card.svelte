<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import type { IProject } from './types';

	export let project: IProject;
</script>

<a
	href={project.githubLink}
	target="_blank"
	rel="noopener noreferrer"
	class="grid grid-cols-12 gap-8 p-8 hover:bg-dark bg-opacity-10 rounded-lg transition-all duration-200"
>
	<div class="col-span-4">
		<img
			src={project.image}
			alt={project.title}
			class="rounded-lg w-48 h-32 object-cover border border-zinc-600"
			loading="lazy"
			width="200"
			height="48"
			decoding="async"
		/>
	</div>

	<div class="col-span-8 flex flex-col">
		<h3 class="text-md text-white">{project.title}</h3>
		<p class="text-sm mt-2">{project.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			{#if project.stars}
				<Link
					link={project.githubLink}
					icon="fa fa-star"
					text={project.stars}
					extraClasses="text-sm font-medium text-white hover:text-teal-400 duration-200"
				/>
			{/if}
			{#if project.downloads}
				<Link
					link={project.githubLink}
					icon="fa fa-download"
					text={project.downloads}
					extraClasses="text-sm font-medium text-white hover:text-teal-400 duration-200"
				/>
			{/if}
		</div>

		<div class="flex flex-row gap-2 flex-wrap mt-4">
			{#each project.technologies as technologies}
				<div class="rounded-full px-3 py-1 items-center bg-teal-400/10">
					<p class="text-sm font-medium text-teal-300">{technologies}</p>
				</div>
			{/each}
		</div>
	</div>
</a>
