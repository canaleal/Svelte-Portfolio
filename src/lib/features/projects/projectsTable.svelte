<script lang="ts">
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import { PROJECTS } from '$lib/features/projects/constants/index';
</script>

<table class="table-auto w-full">
	<thead class="sticky top-0 z-10 ">
		<tr>
			<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Year</th>
			<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Project</th>
			<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Made At</th>
			<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Technologies</th>
			<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Link</th>
		</tr>
	</thead>
	<tbody>
		{#each PROJECTS as project}
			<tr class="border-b border-slate-300/10 last:border-none">
				<td class="py-4 pr-8 text-left align-top text-sm">{project.year}</td>
				<td class="py-4 pr-8 text-left align-top font-semibold text-white">{project.title}</td>
				<td class="py-4 pr-8 text-left align-top text-sm whitespace-nowrap">{project.madeAt}</td>
				<td class="py-4 pr-8 text-left align-top text-sm">
					<TechnologiesBar technologies={project.technologies} />
				</td>

				<td class=" py-4 pr-8 text-left align-top">
					<Link
						link={project.githubLink}
						text={`Github_${project.title}`}
						icon="fa-brands fa-github"
					/>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
