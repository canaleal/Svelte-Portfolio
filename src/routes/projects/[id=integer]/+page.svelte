<script lang="ts">
	import type { projectType } from '../../../types/project-types';
	import { getDevicon } from '../../../utils/devicon-icons';
	import AttentionBar from '../../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../../widgets/SectionHeader.svelte';
	export let data: any;
	let projectElement: projectType = data.projectElement;
</script>

<SectionHeader title={projectElement.title} color="bg-primary" />

<div
	id={projectElement.description}
	class="grid  grid-cols-1 md:grid-cols-2 overflow-hidden  gap-4  py-8 px-4  "
>
	<div class="col-span-1">
		<img height="100" width="auto" class="card card-4xl" src={projectElement.imageUrl} alt="Logo" />
	</div>

	<div class="col-span-1 ">
		<div class="ellipsis">
			<p class="my-2 ">{projectElement.description}</p>
		</div>
		<hr class="my-4" />
		<p class="text-lg font-bold">Size</p>
		<p>{projectElement.size}</p>

		{#if projectElement.githubUrl}
			<a
				href={projectElement.githubUrl}
				target="_blank"
				rel="noreferrer"
				class="card-btn card-btn-blue my-4 rounded-lg">Code</a
			>
		{/if}

		{#if projectElement.exampleUrl}
			<a
				href={projectElement.exampleUrl}
				target={projectElement.exampleUrl.includes('http') ? '_blank' : ''}
				rel="noreferrer"
				class="card-btn  my-4 rounded-lg">Example</a
			>
		{/if}

		<p class="font-bold ">Tools:</p>

		<div class="flex flex-wrap  ">
			{#each projectElement.tools as icon}
				<img
					height="100"
					width="auto"
					title={icon}
					class={`img-icon w-8 mx-2 py-2`}
					alt=""
					src={getDevicon(icon)}
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</div>
