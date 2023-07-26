<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import ColContent from '$lib/components/project/ColContent.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import { getColSpan } from '$lib/utils/grid';
	import Grid from '$lib/layouts/Grid.svelte';
	export let optionalContent: IOptionalContent;
</script>

<Grid>
	{#each optionalContent.colContent as colContent}
		<Card extraClasses="bg-white" colSize={getColSpan(colContent.colSpan)}>
			<ColContent {colContent} />
		</Card>
	{/each}
</Grid>
