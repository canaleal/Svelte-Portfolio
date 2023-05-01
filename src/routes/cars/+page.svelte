<script lang="ts">
	import type { ICarElementType } from '$lib/types/car-types';
	import AttentionBar from '$lib/widgets/AttentionBar.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import CarElementCard from '$lib/widgets/card/CarElementCard.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
</script>

<section>
	<SectionHeader title="Car Logos" />
	<AttentionBar
		message="A list of all car logos from cars.com"
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-4  lg:grid-cols-8 gap-8 py-8 px-8">
		{#if carElements}
			{#each carElements as carElement, i}
				<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={2}>
					<CarElementCard {carElement} />
				</Card>
			{/each}
		{/if}
	</div>
</section>
