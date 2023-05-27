<script>
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';
</script>

<section>
	<About />

	<SectionHeader title="Recent Projects" />
	<Projects />
</section>
