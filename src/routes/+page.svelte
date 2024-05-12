<script lang="ts">
	import About from '$lib/features/about/about.svelte';
	import Education from '$lib/features/education/education.svelte';
	import Experience from '$lib/features/experience/experience.svelte';
	import Projects from '$lib/features/projects/projects.svelte';
	import Header from '$lib/features/header/header.svelte';
	import Modal from '$lib/features/projects/modal.svelte';

	const LAYOUT_SPACING ='flex-1 flex flex-col gap-16 ';
	const LAYOUT_SPACING_PX = "px-8 md:px-16 lg:px-18 xl:px-20 2xl:px-28 3xl:px-36"
	const LAYOUT_SPACING_PY = "py-8 md:py-16 lg:py-18 xl:py-20 2xl:py-28 3xl:py-36"
	const LAYOUT = `${LAYOUT_SPACING} ${LAYOUT_SPACING_PX} ${LAYOUT_SPACING_PY}`
</script>

<Modal />
<section class="flex flex-col xl:flex-row w-screen">
	<div class="bg-dark-900 text-zinc-50 {LAYOUT}">
		<Header />
	</div>

	<main class="bg-zinc-50 text-dark-900 {LAYOUT}">
		<About />
		<Experience />
		<Projects />
		<Education />
	</main>
</section>
