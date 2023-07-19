<script>
	import Header from '$lib/layouts/Header.svelte';
	import About from '$lib/layouts/About.svelte';
	import Projects from '$lib/features/project/Projects.svelte';
</script>

<div class="py-8">
	<Header />
</div>

<div class="bg-dark bg-topography  text-white">
	<div class="bg-dark-trans  py-24  px-2">
		<About />
	</div>
</div>

<div class="py-8">
	<Projects />
</div>
