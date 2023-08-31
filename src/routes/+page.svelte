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


<section id="hero" class="relative overflow-hidden h-screen  bg-dark">
	<Header />
</section>

<section id="about" class="bg-dark py-32 z-2">
	<About />
</section>


<section id="projects" class="py-16 z-2">
	<Projects />
</section>

