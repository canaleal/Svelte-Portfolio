<script>
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Image from '$lib/widgets/Image.svelte';
</script>


<section class="bg-dark h-5/6 grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4    overflow-hidden">
	<div class="col-span-1  text-white">
		<About />
	</div>

	<div class="col-span-3">
		<Image imageUrl={"/assets/images/projects/mapping_high.webp"}/>
	</div>
</section>

<section>
	<Projects />
</section>