<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import { PROJECTS } from '$lib/features/projects/constants/index';
</script>

<section class="px-64 py-32">
	<Link
		link="/"
		text={'Portfolio'}
		iconPosition="Left"
		icon="fa-solid fa-arrow-left"
		extraClasses="text-md font-medium text-white hover:text-indigo-400"
	/>

	<h1 class="text-5xl font-bold changing-gradient-text  mt-2">All Projects</h1>

	<table class="table-auto mt-8 w-full">
		<thead class="sticky top-0 z-10 ">
			<tr>
				<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Year</th>
				<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Project</th>
				<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Made At</th>
				<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">technologies</th>
				<th class="py-4 pr-8  text-left text-white text-sm  font-semibold">Link</th>
			</tr>
		</thead>
		<tbody>
			{#each PROJECTS as project}
				<tr class="border-b border-slate-300/10 last:border-none">
					<td class="py-4 pr-8  text-left align-top text-sm">{project.year}</td>
					<td class="py-4 pr-8  text-left align-top  font-semibold text-white">{project.title}</td>
					<td class="py-4 pr-8 text-left align-top text-sm whitespace-nowrap">{project.madeAt}</td>
					<td class="py-4 pr-8 text-left align-top text-sm">
						<div class="flex flex-row gap-2 flex-wrap">
							{#each project.technologies as technologies}
								<div class="rounded-full px-3 py-1 items-center bg-teal-400/10">
									<p class="text-sm font-medium text-teal-300">{technologies}</p>
								</div>
							{/each}
						</div>
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
</section>
