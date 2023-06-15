<script lang="ts">
	import type { ICarElementType } from '$lib/types/car-types';

	import Underline from '$lib/widgets/Underline.svelte';
	import CodeJson from '$lib/widgets/code/CodeJSON.svelte';
	import { onMount } from 'svelte';

	export let data: any;
	let carElements: ICarElementType[] = data.logos;
	let filteredCarElements: ICarElementType[] = carElements;

	let translateDivs: NodeListOf<Element> | Element[] = [];
	let textRefs: any = [];

	onMount(() => {
		translateDivs = document.querySelectorAll('.trans');
		textRefs = document.querySelectorAll('.js-text');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', function () {
						let el = entry.target as HTMLElement;
						let scale = parseInt(el.dataset.scale || '2');
						let direction = parseInt(el.dataset.direction || '1');
						let max = parseInt(el.dataset.max || '300');
						let translateValue =
							Math.min(max, (window.scrollY / window.innerHeight) * 30 * scale) * direction;

						el.style.transform = `translate3d(0px, ${translateValue}px, 0px)`;
					});
				}
			});
		});

		translateDivs.forEach((img: Element) => observer.observe(img));

		const observerText = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).style.opacity = '1';
					entry.target.classList.add('slide-in-bottom-fast');

					observerText.unobserve(entry.target);
				}
			});
		});

		textRefs.forEach((img: Element) => observerText.observe(img));
	});
</script>

<div class="bg-dark bg-topography shadow-md text-white">
	<div class="bg-overlay ">
		<div class="container text-right flex lg:flex-row flex-col py-24 gap-8 px-8 ">
			<div class="ml-auto">
				<p class="text-subtitle">AUTO BRANDS</p>
				<Underline color="bg-white ml-auto" />
				<p class="text-title my-2">Showcase</p>

				<p>Showing <span>{filteredCarElements.length} of {carElements.length}</span> from Sample</p>
			</div>
		</div>
	</div>
</div>
<div id="cars" class="grid grid-cols-12 gap-8 py-8 px-8 container overflow-hidden">
	{#each filteredCarElements.slice(0, 48) as carElement, i}
		<div class={`p-auto text-center justify-center mx-auto slide-in-right-slow`}>
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

<div class="bg-dark bg-topography  text-white overflow-hidden">
	<div class="bg-overlay ">
		<div class="container flex lg:flex-row flex-col py-24 px-8 ">
			<div class="flex-1 flex flex-col  gap-8 ">
				<p class="text-subtitle">Open Source API</p>

				<p class="text-title my-2">800+ High Resolution Images</p>

				<div class="flex flex-row gap-8">
					<p class="w-1/2">
						Extensive digital library dedicated solely to high-quality images of car brand logos
						from around the world. Providing real-time access to a wide array of car logos in
						various resolutions, it serves as a valuable resource for developers, businesses, and
						automobile enthusiasts.
					</p>
				</div>
			</div>

			<div class="flex-1 trans" data-scale={3} data-max={200} data-direction={1}>
				<CodeJson value={carElements.slice(55, 56)} />
			</div>
		</div>
	</div>
</div>

<div class="grid grid-cols-8 gap-8 py-8 px-8 container bg-grid ">
	{#each filteredCarElements.slice(70, 78) as carElement, i}
		<div class=" p-auto text-center justify-center mx-auto ">
			<img
				height="100"
				width="auto"
				title={carElement.name}
				class={`  w-64 py-2 drop-shadow-lg z-${i}}`}
				alt={carElement.name}
				src={carElement.imgUrl}
				loading={'lazy'}
			/>
		</div>
	{/each}
</div>

<div class="bg-smoke shadow-md ">
	<div class="container flex lg:flex-row flex-col  py-24 px-8 gap-8">
		<div class="flex-1 flex flex-col  gap-8 js-text">
			<p class="text-subtitle">REST API Sample</p>
			<p class="text-title my-2">Advanced Filtering</p>

			<div class="flex flex-col gap-8">
				<p class="w-1/2">
					With over 800+ car brand logos, the API provides a wide array of filtering options to
					ensure that you get the exact logo you are looking for. You can filter by name, country,
					year, and even by color. The API also provides a search endpoint that allows you to search
					for a specific car brand logo by name.
				</p>

				<p class="w-1/2">
					Don't need all the data? Don't want to call an API. No problem. You can download the
					entire dataset in JSON format, CSV, or even as an SQL file. The dataset is updated
					regularly to ensure that you have the latest brands.
				</p>
			</div>
		</div>

		<div class="flex-1 js-text ">
			<CodeJson color="bg-overlay bg-dark" height="h-96 " value={carElements.slice(60, 61)} />
		</div>
	</div>
</div>
