<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import type { IExperience } from './types/index';
	export let experience: IExperience;
</script>

<div class="flex p-8 gap-4 hover:bg-dark-hover bg-opacity-10 rounded-lg duration-200">
	<div class="flex-1">
		<h3 class="text-xs font-semibold uppercase">{experience.start} - {experience.end}</h3>
	</div>

	<div class="flex-2 flex flex-col">
		<h3 class="text-md text-white">{experience.company}</h3>
		<p class="text-md text-zinc-400">{experience.position}</p>
		<p class="text-sm mt-2">{experience.description}</p>
		<TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
	</div>
</div>
