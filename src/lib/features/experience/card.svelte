<script lang="ts">
	import type { IExperience } from './types/index';
	export let experience: IExperience;
</script>

<div
	class="grid grid-cols-12 gap-8 p-8 hover:bg-dark bg-opacity-10 rounded-lg transition-all duration-200"
>
	<div class="col-span-4">
		<h3 class="text-xs font-semibold uppercase">{experience.start} - {experience.end}</h3>
	</div>

	<div class="col-span-8 flex flex-col">
		<h3 class="text-md text-white">{experience.company}</h3>
		<p class="text-md text-zinc-400">{experience.position}</p>
		<p class="text-sm mt-2">{experience.description}</p>

		<div class="flex flex-row gap-2 flex-wrap mt-4">
			{#each experience.technologies as technologies}
				<div class="rounded-full px-3 py-1 items-center bg-teal-400/10">
					<p class="text-sm font-medium text-teal-300">{technologies}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
