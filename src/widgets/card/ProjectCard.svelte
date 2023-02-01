<script lang="ts">
	import type { projectType } from '../../types/project-types';
	import { applicationFieldFontIcon } from '../../types/project-types';
	import { getDevicon } from '../../utils/devicon-icons';
	export let projectElement: projectType;
</script>

<a href={projectElement.exampleUrl || projectElement.githubUrl} target="_blank" rel="noreferrer">
	<img
		height="100"
		width="auto"
		src={`${projectElement.imageUrl}`}
		alt={`${projectElement.title}`}
		class="img-card img-card-lg"
		loading="lazy"
	/>
</a>

<div class="p-4 ">
	<p class="text-xl ">
		{projectElement.title}
	</p>
	<hr class="bg-primary my-4 w-16 h-1 rounded-lg" />

	<p class="text-gray-700 my-1">
		<i class="{applicationFieldFontIcon[projectElement.applicationField]} mr-1" />

		{projectElement.size}
	</p>
</div>
<hr class="border-gray-400" />
<div class="p-4 h-fit">
	<div class="ellipsis">
		<p>{projectElement.description}</p>
	</div>
</div>

<hr class="border-gray-400" />

<div class="p-4">
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

		<a href={`/projects/${projectElement.id}`} rel="noreferrer" class="card-btn rounded-lg"
			><i class="fa-solid fa-plus mr-2" />More</a
		>
	</div>
</div>

<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
	<div class="flex flex-wrap">
		{#each projectElement.tools as icon}
			<img
				height="100"
				width="auto"
				title={icon}
				class={`img-icon w-8 mx-2 py-2 `}
				alt=""
				src={getDevicon(icon)}
				loading="lazy"
			/>
		{/each}
	</div>
</div>
