<script lang="ts">
	import About from '$lib/features/about/about.svelte';
	import Education from '$lib/features/education/education.svelte';
	import Experience from '$lib/features/experience/experience.svelte';
	import Projects from '$lib/features/projects/projects.svelte';
	import Header from '$lib/features/header/header.svelte';
	import Modal from '$lib/features/projects/modal.svelte';
	
</script>

<Modal/>
<section class="flex flex-col xl:flex-row px-32 w-screen">
	<div class="relative xl:fixed  py-16 ">
		<Header />
	</div>
	<div class="flex-1 hidden xl:block" />
	<main class="flex-1 flex flex-col gap-16  py-16 ">
		<About />
		<Experience />
		<Projects />
		<Education />
	</main>
</section>






