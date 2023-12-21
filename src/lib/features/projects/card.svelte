<script lang="ts">
	import HighlightedText from '$lib/components/elements/highlightedText.svelte';
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import { formatNumber } from '$lib/utils/text-format';
	import type { IProject } from './types';

	export let project: IProject;
	
	import { projectStore } from './store/projectStore';
    const selectProject = () => {
		projectStore.setSelectedProject(project);
	};
</script>

<div class="grid grid-cols-12 p-8 hover:bg-dark bg-opacity-10 rounded-lg duration-200">
	<div class="col-span-4" on:click={()=>selectProject()} on:keydown={()=>{}}>
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

		<Link link={project.githubLink}>
			<span class="fa-solid fa-arrow-up-right-from-square" />
			{project.title}
		</Link>

		<p class="text-sm mt-2">{project.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			{#if project.stars}
				<HighlightedText>
					<span class="fa fa-star" />
					{formatNumber(project.stars)}
				</HighlightedText>
			{/if}
			{#if project.downloads}
				<HighlightedText>
					<span class="fa fa-download" />
					{formatNumber(project.downloads)}
				</HighlightedText>
			{/if}
			{#if project.awards}
				{#each project.awards as award}
					<HighlightedText>
						<span class="fa fa-trophy" />
						{award}
					</HighlightedText>
				{/each}
			{/if}
		</div>

		<TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
	</div>
</div>
