<script lang="ts">
	import Image from '$lib/widgets/Image.svelte';
	import Card from '$lib/widgets/card/Card.svelte';

	const ART = [
		'/assets/images/gallery/1.webp',
		'/assets/images/gallery/2.webp',
		'/assets/images/gallery/3.webp',
		'/assets/images/gallery/4.webp',
		'/assets/images/gallery/5.webp',
	
		
	];
</script>

<div class="bg-primary  pt-32 flex flex-col ">
	<div class="flex-1 justify-end text-right container px-8  align-bottom">
		<p class="text-title text-white text-no-spacing">
			MRA <span class="text-subtitle text-no-spacing">DESIGN</span>
		</p>
	</div>
</div>

<div
	id="projects"
	class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3   gap-8 py-4 overflow-hidden px-8 container"
>
	{#each ART as art, i}
		<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={i + 5}>
			<Image imageUrl={art} hasColor={true} />
		</Card>
	{/each}
</div>
