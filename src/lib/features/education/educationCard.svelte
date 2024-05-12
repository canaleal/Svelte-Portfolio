<script lang="ts">
	import HighlightedText from '$lib/components/elements/highlightedText.svelte';
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import type { IEducation } from './types/index';

	export let education: IEducation;
</script>

<div class="flex flex-col md:flex-row gap-4 cursor-hover-trigger">
	<div class="flex-1">
		<h3 class="text-xs font-semibold uppercase">{education.start} - {education.end}</h3>
	</div>

	<div class="flex-3 flex flex-col">
		<Link link={education.link}>
			<span class="fa-solid fa-arrow-up-right-from-square" />
			{`${education.school}`}
		</Link>
		
		<p class="text-md text-indigo-600 font-semibold mt-2">{education.program}</p>
		<p class="text-sm mt-2">{education.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			<HighlightedText>
				<span class="fa fa-award" />
				{education.grade}
			</HighlightedText>

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
