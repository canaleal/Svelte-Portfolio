<script lang="ts">
	import type { ICarElementType } from '$lib/types/car-types';
	import Searchbar from '$lib/widgets/Searchbar.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import CarElementCard from '$lib/widgets/card/CarElementCard.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
	import { isEmptyString } from '$lib/utils/is-emptyString';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
	let filteredCarElements: ICarElementType[] = carElements;

	
	function searchCarElement(search: string){
		if(isEmptyString(search)) {
			filteredCarElements = carElements;
			return;
		};
		filteredCarElements = carElements.filter((carElement: ICarElementType) => {
			return carElement.name.toLowerCase().includes(search.toLowerCase());
		});
	};

</script>

<section>
	<SectionHeader title="Car Logos" />
	
	<div class="bg-smoke px-8 py-8">
		<Searchbar
		placeholder={"Search for a car logo..."}
		onChangeFunction={searchCarElement}
	/>
	</div>
	

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-4  lg:grid-cols-8 gap-8 py-8 px-8">
		{#if filteredCarElements}
			{#each filteredCarElements as carElement, i}
				<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={2}>
					<CarElementCard {carElement} />
				</Card>
			{/each}
		{/if}
	</div>
</section>
