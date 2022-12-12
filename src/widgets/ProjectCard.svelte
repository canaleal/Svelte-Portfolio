<script lang="ts">
	import { getDevicon } from '../utils/devicon-icons';
	import type { projectType } from '../types/project-types';
	export let projectElement: projectType;
	export let colSize = 'col-span-1';
</script>

<div class="card {colSize} shadow-xl flex flex-col justify-between">
	
		<img
			height="100"
			width="auto"
			src={`${projectElement.imageUrl}`}
			alt={`${projectElement.title}`}
			class="img-card img-card-lg"
			loading="lazy"
		/>

		<div class="bg-dark   py-5 text-center text-white sticky top-0">
			<h1 class="text-xl  ">{projectElement.title}</h1>
		</div>


		<div class="p-4 h-fit">
			<div class="ellipsis">
				<p class="my-2 ">{projectElement.description}</p>
			</div>

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
					target="_blank"
					rel="noreferrer"
					class="card-btn  my-4 rounded-lg">Example</a
				>
			{/if}
		</div>

		<div class="bg-smoke rounded-b-lg  p-4 text-center text-white bottom-0">
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
	
</div>
