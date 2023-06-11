<script>
	import About from '$lib/components/About.svelte';
	import AboutContext from '$lib/components/AboutContext.svelte';
	import Projects from '$lib/components/Projects.svelte';
	
</script>

<section class="py-8 flex flex-col gap-8">
	<About />

	<div class="bg-primary">

		<div class="container">
			<AboutContext />
		</div>
	</div>
	
		

	<Projects />
</section>
