<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import Image from '../Image.svelte';
	import Card from '../card/Card.svelte';
	export let projectElement: IProjectType;

	const numberOfImages = projectElement.optionalImageUrls.length;
	const projectImages = projectElement.optionalImageUrls;

	const getImageCardSize = (numberOfImages: number) => {
		if (numberOfImages === 1) {
			return 'card-4xl';
		} else if (numberOfImages >= 3) {
			return 'card-2xl';
		} else {
			return 'card-3xl';
		}
	};

	const getColumnSize = (numberOfImages: number) => {
		if (numberOfImages === 1) {
			return 'col-span-4';
		} else if (numberOfImages >= 3) {
			return 'col-span-1';
		} else {
			return 'col-span-2';
		}
	};

	const imageCardSize = getImageCardSize(numberOfImages);
	const columnSize = getColumnSize(numberOfImages);
</script>

<section class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden bg-dark">
	{#each projectImages as image, i}
		<Card
			colSize={columnSize}
			isRounded={false}
			slideAnimation={'slide-in-right'}
			speed={i + 1 * 5}
		>
			<Image imageUrl={image} imageSize={imageCardSize} />
		</Card>
	{/each}
</section>
