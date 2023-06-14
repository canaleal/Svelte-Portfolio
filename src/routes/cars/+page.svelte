<script lang="ts">
	import type { ICarElementType } from '$lib/types/car-types';

	import Underline from '$lib/widgets/Underline.svelte';
	import { onMount } from 'svelte';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
	let filteredCarElements: ICarElementType[] = carElements;

	let translateDivs: NodeListOf<Element> | Element[] = [];

	onMount(() => {
		translateDivs = document.querySelectorAll('.trans');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', function () {
						let stringScale = (entry.target as HTMLElement).dataset.scale;
						let scale = stringScale ? parseInt(stringScale) : 2;
						let scrollPercent = (window.scrollY / window.innerHeight) * 100;
						let translateValue = Math.min(1200, scrollPercent * scale); // Adjust the multiplier as needed

						(
							entry.target as HTMLElement
						).style.transform = `translate3d(0px, -${translateValue}px, 0px)`;
					});
				}
			});
		});

		translateDivs.forEach((img: Element) => observer.observe(img));
	});
</script>

<div class="bg-dark bg-topography shadow-md text-white">
	<div class="bg-overlay ">
		<div class="container text-right flex lg:flex-row flex-col py-24 gap-8 px-8 ">
			<div class="ml-auto">
				<p class="text-subtitle">AUTO BRANDS</p>
				<Underline color="bg-white ml-auto" />
				<p class="text-title my-2">Showcase</p>

				<p>Showing <span>{filteredCarElements.length} of {carElements.length}</span></p>
			</div>
		</div>
	</div>
</div>

<div id="cars" class="grid grid-cols-12 gap-8 py-8 px-8 container">
	{#each filteredCarElements.slice(0, 48) as carElement, i}
		<div class=" p-auto text-center justify-center mx-auto ">
			<img
				height="100"
				width="auto"
				title={carElement.name}
				class={`img-icon img-icon-color  w-12 py-2 `}
				alt={carElement.name}
				src={carElement.imgUrl}
				loading={'lazy'}
			/>
		</div>
	{/each}
</div>

<div class="bg-dark bg-topography shadow-md text-white">
	<div class="bg-overlay ">
		<div class="container flex lg:flex-col flex-col py-24 gap-8 px-8 ">
			<p class="text-subtitle">Open Source API</p>

			<p class="text-title my-2">300+ High Resolution Images</p>

			<div class="flex flex-row gap-8">
				<p class="w-1/3">
					Extensive digital library dedicated solely to high-quality images of car brand logos from
					around the world. Providing real-time access to a wide array of car logos in various
					resolutions, it serves as a valuable resource for developers, businesses, and automobile
					enthusiasts.
				</p>
			</div>
		</div>
	</div>
</div>

<div id="cars" class="grid grid-cols-4 gap-8 pt-24 pb-8 px-8 container">
	{#each filteredCarElements.slice(52, 56) as carElement, i}
		<div class=" p-auto text-center justify-center mx-auto trans" data-scale={((i % 4)) * 2}>
			<img
				height="100"
				width="auto"
				title={carElement.name}
				class={`  w-128 py-2 drop-shadow-lg z-${i}}`}
				alt={carElement.name}
				src={carElement.imgUrl}
				loading={'lazy'}
			/>
		</div>
	{/each}
</div>
