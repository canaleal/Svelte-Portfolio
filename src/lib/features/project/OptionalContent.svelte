<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import ColContent from '$lib/features/project/components/ColContent.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import { getColSpan } from '$lib/utils/tailwindGrid';
	import Grid from '$lib/layouts/Grid.svelte';
	export let optionalContent: IOptionalContent;
</script>

<Grid lgGridColSpan={optionalContent.colSpan}>
	{#each optionalContent.colContent as colContent, idx}
		<Card
			colSize={getColSpan(colContent.colSpan)}
			cardHeight={colContent.cardHeight}
			hasShadow={colContent.hasShadow}
			extraClasses="{getColSpan(
				colContent.colSpan
			)} hidden-animation hidden-animation-bottom {optionalContent.hasStaggeredDelay
				? 'delay-with-var'
				: ''}"
		>
			<ColContent {colContent} />
		</Card>
	{/each}
</Grid>
