<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import About from '$lib/layouts/About.svelte';
	import Projects from '$lib/features/project/Projects.svelte';

</script>

<Header />

<div id="about" class="bg-dark bg-grid-dot py-24">
	<About />
</div>

<div class="py-8">
	<Projects />
</div>
