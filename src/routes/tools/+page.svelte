<script lang="ts">
	import { CODE_TOOLS, TOOL_LINKS } from '$lib/data/codeTools';
	import AttentionBar from '$lib/widgets/AttentionBar.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import CodeToolCard from '$lib/widgets/card/CodeToolCard.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
</script>

<section>
	<SectionHeader title="Project Tools" />
	<AttentionBar
		message="This page contains a selection of tools used to create full-stack web applications. Click on the icons to visit the tool's website."
	/>
	<div
		class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6  gap-8 py-8 px-8 overflow-hidden"
	>
		{#each CODE_TOOLS as codeTool, i}
			<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={i}>
				<CodeToolCard {codeTool} />
			</Card>
		{/each}
	</div>
</section>
