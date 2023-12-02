<script lang="ts">
	import type { ISections } from '$lib/types';
	import { onMount } from 'svelte';

	const SECTIONS: ISections[] = [
		{
			title: 'About',
			link: '#About'
		},
		{
			title: 'Experience',
			link: '#Experience'
		},
		{
			title: 'Projects',
			link: '#Projects'
		}
	];
	let selectedSection = SECTIONS[0];


	function handleIntersection(entries: { isIntersecting: any; target: { id: any } }[]) {
		entries.forEach((entry: { isIntersecting: any; target: { id: any } }) => {
			if (entry.isIntersecting) {
				const sectionId = entry.target.id;
				selectedSection =
					SECTIONS.find((section) => section.title === sectionId) ?? SECTIONS[0];
			}
		});
	}

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null, // Use the viewport as the root
			rootMargin: '0px', // No margin
			threshold: 0.1 // Trigger when 50% of the section is visible
		});

		SECTIONS.forEach((section) => {
			const sectionElement = document.querySelector(`#${section.title}`);
			if (sectionElement) {
				observer.observe(sectionElement);
			}
		});

		// Clean up observer on component destruction
		return () => {
			observer.disconnect();
		};
	});
</script>

<section id="Header" class="flex flex-col p-4">
	<h1 class="text-5xl font-bold text-green-to-purple ">Alex Canales</h1>
	<h2 class="text-xl text-white mt-2">Full Stack Software Developer</h2>

	<div class="flex flex-col mt-16">
		{#each SECTIONS as section}
			<a href={section.link} class="text-md {section === selectedSection ? 'text-white' : 'hover:text-white duration-200'} mt-2">{section.title}</a>
		{/each}
	</div>

	<div class="flex flex-row gap-4 mt-32">
		<a href="https://github.com/canaleal" rel="noreferrer" target="_blank" class="hover:text-white duration-200 text-2xl">
			<span class="fa-brands fa-github" />
		</a>
		<a href="https://www.linkedin.com/in/alex-canales/" rel="noreferrer" target="_blank" class="hover:text-white duration-200 text-2xl">
			<span class="fa-brands fa-linkedin" />
		</a>
	</div>
</section>
