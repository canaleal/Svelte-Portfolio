<script lang="ts">
	import { onMount } from 'svelte';
	import { SECTIONS } from './constants';
	import Link from '$lib/components/form/link.svelte';

	export let extraClasses: string = '';
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
			threshold: 0.6 // Trigger when 50% of the section is visible
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

<div class="hidden lg:flex  flex-col   {extraClasses}">
	{#each SECTIONS as section}
		<div class="flex flex-row gap-4 items-center mt-4">
			<Link
				link={section.link}
				extraClasses="text-sm {section === selectedSection
					? 'text-zinc-50'
					: 'text-zinc-600 hover:text-zinc-50 duration-200'} "
			>
				<div
					class="{section === selectedSection
						? 'w-24 bg-white'
						: 'w-8 bg-zinc-600 '} transition-all duration-200 h-0.5 rounded-lg"
				/>
				{section.title}
			</Link>
		</div>
	{/each}
</div>
