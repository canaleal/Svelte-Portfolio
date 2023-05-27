<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import Image from '../Image.svelte';
	import Card from '../card/Card.svelte';
	export let projectImages: string[] = [];
	const numberOfImages = projectImages.length;
	

	const getImageCardSize = (numberOfImages: number) => {
		if (numberOfImages === 1) {
			return 'img-card-4xl';
		} else if (numberOfImages >= 3) {
			return 'img-card-2xl';
		} else {
			return 'img-card-3xl';
		}
	};

	const imageCardSize = getImageCardSize(numberOfImages);
</script>

<section class="flex md:flex-col lg:flex-row overflow-hidden bg-dark">
	{#each projectImages as image, i}
		<Card
			colSize={'flex-1'}
			isRounded={false}
			slideAnimation={'slide-in-right'}
			speed={i + 1 * 5}
		>
			<Image imageUrl={image} imageSize={imageCardSize} />
		</Card>
	{/each}
</section>
