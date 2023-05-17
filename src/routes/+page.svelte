<script>
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>


<section class="bg-dark grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-8  h-1/2  overflow-hidden">
	<div class="col-span-1 flex flex-col px-8 py-8 justify-between text-white">
		<About />
		
	</div>

	<div class="col-span-3">
		<div class="header h-full" />
	</div>
</section>

<section>
	<Projects />
</section>