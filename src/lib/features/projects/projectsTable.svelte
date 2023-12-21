<script lang="ts">
	import HighlightedText from '$lib/components/elements/highlightedText.svelte';
	import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte';
	import Link from '$lib/components/form/link.svelte';
	import { PROJECTS } from '$lib/features/projects/constants/index';
	import { formatNumber } from '$lib/utils/text-format';
</script>

<table class="table-auto w-full">
	<thead class="sticky top-0 z-10 ">
		<tr>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold">Year</th>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold">Project</th>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold hidden lg:block">Made At</th>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold">Technologies</th>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold hidden lg:block">Awards</th>
			<th class="py-4 pr-8 text-left text-white text-sm font-semibold">Link</th>
		</tr>
	</thead>
	<tbody>
		{#each PROJECTS as project}
			<tr class="border-b border-slate-300/10 last:border-none">
				<td class="py-4 pr-8 text-left align-top text-sm">{project.year}</td>
				<td class="py-4 pr-8 text-left align-top text-md font-semibold text-white"
					>{project.title}</td
				>
				<td class="py-4 pr-8 text-left align-top text-sm whitespace-nowrap hidden lg:block"
					>{project.madeAt}</td
				>
				<td class="py-4 pr-8 text-left">
					<TechnologiesBar technologies={project.technologies} />
				</td>
				<td class="py-4 pr-8 text-left hidden lg:block">
					{#if project.stars && project.downloads}
						<div class="flex flex-row gap-4">
							{#if project.stars}
								<HighlightedText>
									<span class="fa fa-star" />
									{formatNumber(project.stars)}
								</HighlightedText>
							{/if}
							{#if project.downloads}
								<HighlightedText>
									<span class="fa fa-download" />
									{formatNumber(project.downloads)}
								</HighlightedText>
							{/if}
						</div>
					{:else if project.awards}
						{#each project.awards as award}
							<HighlightedText>
								<span class="fa fa-trophy" />
								{award}
							</HighlightedText>
						{/each}
					{/if}
				</td>

				<td class="py-4 pr-8 text-left align-top">
					<Link link={project.githubLink}>
						<span class="fa-brands fa-github" />
						{`Github_${project.title}`}
					</Link>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
