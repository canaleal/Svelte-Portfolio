<script lang="ts">
	import HighlightedText from '$lib/components/elements/highlightedText.svelte';
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import type { IEducation } from './types/index';

	export let education: IEducation;
</script>

<div class="grid grid-cols-12 gap-4 p-8 hover:bg-dark-hover bg-opacity-10 rounded-lg duration-200">
	<div class="col-span-4">
		<h3 class="text-xs font-semibold uppercase">{education.start} - {education.end}</h3>
	</div>

	<div class="col-span-8 flex flex-col">
		<h3 class="text-md text-white">{education.school}</h3>
		<p class="text-md text-zinc-400">{education.program}</p>
		<p class="text-sm mt-2">{education.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			{#if education.grade}
				<HighlightedText>
					<span class="fa fa-award" />
					{education.grade}
				</HighlightedText>
			{/if}
			{#if education.awards}
				{#each education.awards as award}
					<HighlightedText>
						<span class="fa fa-trophy" />
						{award}
					</HighlightedText>
				{/each}
			{/if}
		</div>

		<TechnologiesBar technologies={education.technologies} extraClasses="mt-4" />
	</div>
</div>
