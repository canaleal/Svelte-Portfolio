<script lang="ts">
	import About from '$lib/features/about/about.svelte';
	import Education from '$lib/features/education/education.svelte';
	import Experience from '$lib/features/experience/experience.svelte';
	import Projects from '$lib/features/projects/projects.svelte';
	import Header from '$lib/features/header/header.svelte';
	import { onMount } from 'svelte';
</script>

<section class="flex flex-row px-64 py-32">
	<div class="fixed h-screen">
		<Header />
	</div>
	<div class="flex-1 " />
	<main class="flex-1 flex flex-col gap-16">
		<About />
		<Experience />
		<Projects />
		<Education />
	</main>
</section>
