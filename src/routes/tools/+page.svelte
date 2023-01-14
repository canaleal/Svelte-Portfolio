<script lang="ts">
	import { CODE_TOOLS, TOOL_LINKS } from '../../data/codeTools';
	import { FULLSTACK_PROJECT_IDEAS } from '../../data/projects';
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import Card from '../../widgets/card/Card.svelte';
	import CodeToolCard from '../../widgets/card/CodeToolCard.svelte';
	import ProjectIdeaCard from '../../widgets/card/ProjectIdeaCard.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
</script>

<section>
	<SectionHeader title="Project Tools" color="bg-primary" />
	<AttentionBar
		message="This page contains a selection of tools used to create full-stack web applications. Click on the icons to visit the tool's website."
	/>
	<div class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6  gap-4 py-8 px-4 overflow-hidden">
		{#each CODE_TOOLS as codeTool, i}
			<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={i}>
				<CodeToolCard {codeTool} />
			</Card>
		{/each}
	</div>
</section>
