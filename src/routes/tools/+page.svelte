<script lang="ts">
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
	import { CODE_TOOLS, TOOL_LINKS } from '../../data/codeTools';
	import { FULLSTACK_PROJECT_IDEAS } from '../../data/projects';
	import CodeToolCard from '../../widgets/CodeToolCard.svelte';
	import ProjectIdeaCard from '../../widgets/ProjectIdeaCard.svelte';
</script>

<section>
	<SectionHeader title="Project Tools" color="bg-primary" />
	<AttentionBar
		message="This page contains a selection of tools used to create full-stack web applications. Click on the icons to visit the tool's website."
	/>

	<div id="codeTools" class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6  gap-4 py-8 px-4">
		{#each CODE_TOOLS as codeTool}
			<CodeToolCard {codeTool} />
		{/each}
	</div>

	<SectionHeader title="Tool Links" color="bg-primary" />
	<AttentionBar
		message="This page contains a selection of links to tools used to create full-stack web applications. Click on the icons to visit the tool's website."
	/>

	<div id="toolLinks" class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6  gap-4 py-8 px-4">
		{#each TOOL_LINKS as codeTool}
			<div class="card col-span-1 shadow-xl flex flex-col ">
				<div class="bg-dark py-5 text-center text-white sticky top-0">
					<h1 class="text-xl  ">{codeTool.title}</h1>
				</div>
				<div class="p-4  flex flex-col flex-wrap h-fit">
					{#each codeTool.links as urlElement, i}
						<div class="my-2 flex flex-row items-center">
							<a href={`${urlElement.url}`} target="_blank" rel="noreferrer" class="hover:underline"
								>{urlElement.title}</a
							>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- <SectionHeader title="Project Ideas" color="bg-teal" />
	<AttentionBar
		message="This page contains a selection of project ideas. Most side projects are quite boring, so I've tried to make these ideas as interesting as possible. Note, I've made a few of these projects myself."
	/>

	<div id="projectIdeas" class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 px-4">
		{#each FULLSTACK_PROJECT_IDEAS as projectIdea}
            <ProjectIdeaCard {projectIdea} />
		{/each}
	</div> -->
</section>
