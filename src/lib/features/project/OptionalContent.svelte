<script lang="ts">
	import type { IOptionalContent } from '$lib/features/project/types/project-types';
	import ColContent from '$lib/features/project/components/ColContent.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import { getColSpan } from '$lib/utils/tailwindGrid';
	export let optionalContent: IOptionalContent;
	export let index = 0;
</script>

<div class={` ${ optionalContent.bgColor ?? (index % 2 == 0 ? 'bg-smoke' : 'bg-white')} py-16`}>
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-2 container  ">
		{#each optionalContent.colContent as colContent, idx}
			<Card
				colSize={getColSpan(colContent.colSpan)}
				cardHeight={colContent.cardHeight}
				hasShadow={colContent.hasShadow}
				extraClasses="{getColSpan(
					colContent.colSpan
				)} hidden-animation  {optionalContent.hasStaggeredDelay
					? 'delay-with-var'
					: ''}"
			>
				<ColContent {colContent} />
			</Card>
		{/each}
	</div>
</div>

