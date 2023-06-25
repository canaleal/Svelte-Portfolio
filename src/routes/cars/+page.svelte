<script lang="ts">
	import { CARLOGOS } from '$lib/data/carLogos';
	import type { ICarElementType } from '$lib/types/car-types';
	import Image from '$lib/widgets/Image.svelte';
	import CodeJson from '$lib/widgets/CodeJSON.svelte';
	import { onMount } from 'svelte';
	import Description from '$lib/components/Cars/Description.svelte';
	import About from '$lib/components/Cars/About.svelte';
	import Content from '$lib/components/Cars/Content.svelte';

	let carElements: ICarElementType[] = CARLOGOS as ICarElementType[];
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

<About />

<Description {carElements} />

<Content {carElements}  />
