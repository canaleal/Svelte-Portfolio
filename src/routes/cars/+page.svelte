<script lang="ts">
	import type { ICarElementType, ICarPageOptionType } from '$lib/types/car-types';
	import Searchbar from '$lib/widgets/Searchbar.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import CarElementCard from '$lib/widgets/card/CarElementCard.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
	import { isEmptyString } from '$lib/utils/is-emptyString';
	import About from '$lib/components/About.svelte';
	import Image from '$lib/widgets/Image.svelte';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
	let filteredCarElements: ICarElementType[] = carElements;

	function searchCarElement(search: string) {
		if (isEmptyString(search)) {
			filteredCarElements = carElements;
			return;
		}
		filteredCarElements = carElements.filter((carElement: ICarElementType) => {
			return carElement.name.toLowerCase().includes(search.toLowerCase());
		});
	}
</script>

<Image
	imageSize={'img-card-lg '}
	imageUrl={'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4a74a1168928013.6444cb63b565c.jpg'}
/>

<div class="py-8 px-8 container">
	<div>
		<p class="text-subtitle">AUTO BRANDS</p>
		<h3>Showcase</h3>

		<p>Showing <span>{filteredCarElements.length} of {carElements.length}</span></p>
	</div>
</div>

<SectionHeader title="Car Brands" />

<div id="cars" class="grid  grid-cols-1 md:grid-cols-4  lg:grid-cols-6 gap-8 py-8 px-8 container">
	{#each filteredCarElements as carElement, i}
		<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={2}>
			<CarElementCard {carElement} />
		</Card>
	{/each}
</div>
