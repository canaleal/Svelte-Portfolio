<script>
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
</script>


<section class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4    overflow-hidden">
	
	<div class="col-span-3">
		<Image imageUrl={"/assets/images/projects/mapping_high.webp"} imageSize={"img-card-4xl header"}/>
	</div>
	<div class="col-span-1 ">
		<About />
	</div>

</section>

<section>
	<SectionHeader title="Projects" color={"bg-primary text-white"} />

	<Projects />
</section>