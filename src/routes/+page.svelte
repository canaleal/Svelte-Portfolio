<script>
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects/Projects.svelte';
</script>

<div class="py-8">
	<Header />
</div>

<div class="bg-dark bg-topography  text-white">
	<div class="bg-overlay py-24  px-2">
		<About />
	</div>
</div>

<div class="py-8">
	<Projects />
</div>
