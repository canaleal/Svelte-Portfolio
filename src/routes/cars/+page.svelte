<script lang="ts">
	import type { ICarElementType } from '../../types/car-types';
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import Card from '../../widgets/card/Card.svelte';
	import CarElementCard from '../../widgets/card/CarElementCard.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
</script>

<section>
	<SectionHeader title="Car Logos" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
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
