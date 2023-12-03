<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import type { IEducation } from './types/index';

	export let education: IEducation;
</script>

<div
	class="grid grid-cols-12 gap-8 p-8 hover:bg-dark bg-opacity-10 rounded-lg transition-all duration-200"
>
	<div class="col-span-4">
		<h3 class="text-xs font-semibold uppercase">{education.start} - {education.end}</h3>
	</div>

	<div class="col-span-8 flex flex-col">
		<h3 class="text-md text-white">{education.school}</h3>
		<p class="text-md text-zinc-400">{education.program}</p>
		<p class="text-sm mt-2">{education.description}</p>

		<div class="flex flex-row gap-4 flex-wrap mt-4">
			{#if education.grade}
				<p class="text-sm font-medium  text-indigo-400  hover:text-teal-400 duration-200">
					<span class="fa fa-award" />
					{education.grade}
				</p>
			{/if}
			{#if education.awards}
				{#each education.awards as award}
					<p class="text-sm font-medium  text-indigo-400  hover:text-teal-400 duration-200">
						<span class="fa fa-trophy" />
						{award}
					</p>
				{/each}
			{/if}
		</div>

		<div class="flex flex-row gap-2 flex-wrap mt-4">
			{#each education.technologies as technologies}
				<div class="rounded-full px-3 py-1 items-center bg-teal-400/10">
					<p class="text-sm font-medium text-teal-300">{technologies}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
