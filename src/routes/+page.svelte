<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import About from '$lib/layouts/About.svelte';
	import Projects from '$lib/features/project/Projects.svelte';
	import Work from '$lib/layouts/Work.svelte';

</script>

<div class="bg-dark">
	<Header />
</div>

<div id="about" class="py-16 bg-dark bg-grid-dot shadow-lg ">
	<About />
</div>

<div class="bg-dark bg-grid-dot shadow-lg ">
	<Work />
</div>


<div id="projects" class="py-16 ">
	<Projects />
</div>



