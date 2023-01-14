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

<div class="bg-dark   py-5 text-center text-white sticky top-0">
	<h1 class="text-xl  ">
		{projectElement.title}
		<i class="{applicationFieldFontIcon[projectElement.applicationField]} ml-2" />
	</h1>
</div>

<div class="p-4 h-fit">
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

	<a href={`/projects/${projectElement.id}`} rel="noreferrer" class="card-btn  my-4 rounded-lg"
		>More +</a
	>
</div>

<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
	<div class="flex flex-wrap">
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
