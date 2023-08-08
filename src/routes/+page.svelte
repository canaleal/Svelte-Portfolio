<script lang="ts">
	import Projects from '$lib/features/project/Projects.svelte';
	import About from '$lib/layouts/About.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import Work from '$lib/layouts/Work.svelte';
	import { onMount } from 'svelte';

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

<div class="bg-dark bg-grid-dot py-32">
	<Header />
</div>

<div id="about" class="py-16 shadow-lg ">
	<About />
</div>

<div id="work" class="bg-dark bg-grid-dot shadow-lg py-24">
	<Work />
</div>

<div id="projects" class="py-16 ">
	<Projects />
</div>
