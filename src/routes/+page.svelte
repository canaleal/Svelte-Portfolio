<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import About from '$lib/layouts/About.svelte';
	import Projects from '$lib/features/project/Projects.svelte';
	import Work from '$lib/layouts/Work.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Grid from '$lib/layouts/Grid.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import LaptopMock from '$lib/components/device/LaptopMock.svelte';
	import { onMount } from 'svelte';
	import PhoneMock from '$lib/components/device/PhoneMock.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';

	let hiddenElements: NodeListOf<Element> | Element[] = [];
	onMount(() => {
		hiddenElements = document.querySelectorAll('.hidden-animation');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show-animation');
				}
			});
		});
		hiddenElements.forEach((img: Element) => observer.observe(img));
	});
</script>

<div class="bg-dark-mode ">
	<Header />
</div>

<div id="about" class="py-16 bg-dark-mode bg-grid-dot shadow-lg ">
	<About />
</div>

<div class="bg-dark-mode bg-grid-dot shadow-lg ">
	<Work />
</div>

<div id="projects" class="py-16 ">
	<Projects />
</div>
