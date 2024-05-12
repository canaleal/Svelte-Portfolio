<script lang="ts">
	import About from '$lib/features/about/about.svelte';
	import Education from '$lib/features/education/education.svelte';
	import Experience from '$lib/features/experience/experience.svelte';
	import Projects from '$lib/features/projects/projects.svelte';
	import Header from '$lib/features/header/header.svelte';
	import Modal from '$lib/features/projects/modal.svelte';
</script>

<Modal />
<section class="flex flex-col xl:flex-row w-screen">
	<div class="flex-1 bg-dark-900 text-zinc-50 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40 py-16">
		<div class="flex lg:fixed">
			<Header />
		</div>
	</div>

	<main
		class="flex-1 bg-zinc-50 text-dark-900 flex flex-col px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40 py-16"
	>
		<About />
		<Experience />
		<Projects />
		<Education />
	</main>
</section>
