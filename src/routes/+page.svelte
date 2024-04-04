<script lang="ts">
	import About from '$lib/features/about/about.svelte';
	import Education from '$lib/features/education/education.svelte';
	import Experience from '$lib/features/experience/experience.svelte';
	import Projects from '$lib/features/projects/projects.svelte';
	import Header from '$lib/features/header/header.svelte';
	import Modal from '$lib/features/projects/modal.svelte';
	
</script>

<Modal/>
<section class="flex flex-col xl:flex-row px-8 md:px-16 lg:px-32 xl:px-64 py-16 w-screen">
	<div class="relative xl:fixed">
		<Header />
	</div>
	<div class="flex-1 hidden xl:block" />
	<main class="flex-1 flex flex-col">
		<About />
		<Experience />
		<Projects />
		<Education />
	</main>
</section>






