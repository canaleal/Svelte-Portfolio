<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import type { IExperience } from './types/index';
	export let experience: IExperience;
</script>

<div
	class="grid grid-cols-12 p-8 hover:bg-dark bg-opacity-10 rounded-lg transition-all duration-200"
>
	<div class="col-span-4">
		<h3 class="text-xs font-semibold uppercase">{experience.start} - {experience.end}</h3>
	</div>

	<div class="col-span-8 flex flex-col">
		<h3 class="text-md text-white">{experience.company}</h3>
		<p class="text-md text-zinc-400">{experience.position}</p>
		<p class="text-sm mt-2">{experience.description}</p>
		<TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
	</div>
</div>
