<script lang="ts">
	import { onMount } from 'svelte';
	import { SECTIONS } from './constants';
	import Link from '$lib/components/form/link.svelte';

	let selectedSection = SECTIONS[0];

	function handleIntersection(entries: any[]) {
		entries.forEach((entry: { isIntersecting: any; target: { id: any } }) => {
			if (entry.isIntersecting) {
				const sectionId = entry.target.id;
				selectedSection = SECTIONS.find((section) => section.title === sectionId) ?? SECTIONS[0];
			}
		});
	}

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			root: null, // Use the viewport as the root
			rootMargin: '0px', // No margin
			threshold: 0.5 // Trigger when 50% of the section is visible
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
	<h1 class="text-5xl font-bold changing-gradient-text ">Alex Canales</h1>
	<h2 class="text-xl text-white mt-2">Full Stack Software Developer</h2>

	<div class="flex flex-col mt-16">
		{#each SECTIONS as section}
			<div class="flex flex-row gap-2 items-center  mt-4">
				<div
					class="{section === selectedSection
						? 'w-16 bg-white'
						: 'w-8 bg-zinc-600 '} transition-all duration-200 h-0.5 rounded-lg"
				/>
				<Link
					link={section.link}
					text={section.title}
					extraClasses="text-xs font-semibold uppercase {section === selectedSection
						? 'text-white'
						: 'hover:text-white duration-200'} "
				/>
			</div>
		{/each}
	</div>

	<div class="flex flex-row gap-4 mt-32">
		<Link
			link="https://github.com/canaleal"
			icon="fa-brands fa-github"
			extraClasses="text-2xl hover:text-white"
		/>
		<Link
			link="https://www.linkedin.com/in/alex-canales/"
			icon="fa-brands fa-linkedin"
			extraClasses="text-2xl hover:text-white"
		/>
	</div>
</section>
