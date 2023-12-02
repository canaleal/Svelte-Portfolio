<script lang="ts">
	import type { IProject } from './types';

	export let project: IProject;
</script>

<div
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
		<h3 class="text-lg text-white">{project.title}</h3>

		<p class="text-sm mt-2">{project.description}</p>

		<div class="flex flex-row gap-8 flex-wrap mt-4">
			{#if project.stars}
				<p class="text-sm text-zinc-400"><span class="fa fa-star mr-2" />{project.stars}</p>
			{/if}
			{#if project.downloads}
				<p class="text-sm text-zinc-400"><span class="fa fa-download mr-2" />{project.downloads}</p>
			{/if}
		</div>

		<div class="flex flex-row gap-2 flex-wrap mt-4">
			{#each project.technologies as technologies}
				<div class="rounded-full px-4 py-1 items-center bg-teal-400/10 text-white">
					<p class="text-sm text-primary">{technologies}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
