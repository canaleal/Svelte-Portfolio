<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import { PROJECTS } from '$lib/features/projects/constants/index';
	import AwardsBar from './awardsBar.svelte';
	import LinksBar from './linksBar.svelte';

	const thClass = 'py-4 pr-8 text-left text-white text-sm font-semibold';
	const tdClass = 'py-4 pr-8 text-left align-top';
	const hiddenLgClass = 'hidden lg:block';
</script>

<table class="table-auto w-full">
	<thead class="sticky top-0 z-10">
		<tr>
			<th class={`${thClass}`}>Year</th>
			<th class={`${thClass} text-md`}>Project</th>
			<th class={`${thClass} ${hiddenLgClass}`}>Made At</th>
			<th class={`${thClass}`}>Technologies</th>
			<th class={`${thClass} ${hiddenLgClass}`}>Awards</th>
			<th class={`${thClass}`}>Link</th>
		</tr>
	</thead>
	<tbody>
		{#each PROJECTS as project}
			<tr class="border-b border-slate-300/10 last:border-none">
				<td class="{tdClass} text-sm">{project.year}</td>
				<td class="{tdClass} text-md font-semibold text-white">{project.title}</td>
				<td class="{tdClass} {hiddenLgClass} ">{project.madeAt}</td>
				<td class="{tdClass}">
					<TechnologiesBar technologies={project.technologies} />
				</td>
				<td class={`${tdClass} ${hiddenLgClass}`}>
					<AwardsBar {project} />
				</td>
				<td class={`${tdClass}`}>
					<LinksBar {project} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
