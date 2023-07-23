<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import Image from '$lib/components/ui/Image.svelte';
	import ColContent from '$lib/components/project/ColContent.svelte';
	import Card from '$lib/components/card/Card.svelte';
	export let optionalContent: IOptionalContent;


</script>

<div class="js-trans  container grid  grid-cols-1   lg:grid-cols-{optionalContent.colSpan || 3} gap-8 py-8">
	{#each optionalContent.colContent as colContent}
		{#if colContent.imageUrl}
			<Card extraClasses="relative shadow-md" colSize={`col-span-${colContent.colSpan}`} isOverflowHidden={true}>
				<Image
					imageUrl={colContent.imageUrl}
					imageAlt={colContent.title}
					imageSize={colContent.imageSize}
				/>

				<div class="bg-dark-trans absolute p-2 top-0 right-0 rounded-bl-lg">
					<a class="p-2" href={colContent.imageUrl} target="_blank" rel="noreferrer">Source</a>
				</div>
			</Card>
		{:else}
			<Card extraClasses="bg-white" colSize={`col-span-${colContent.colSpan}`}>
				<ColContent {colContent} />
			</Card>
		{/if}
	{/each}
</div>
