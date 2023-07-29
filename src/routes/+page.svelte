<script lang="ts">
	import Header from '$lib/layouts/Header.svelte';
	import About from '$lib/layouts/About.svelte';
	import Projects from '$lib/features/project/Projects.svelte';
</script>

<div class="bg-dark">
	<Header />
</div>

<div id="about" class="py-16 bg-dark bg- shadow-lg">
	<About />
</div>

<div class="py-16">
	<Projects />
</div>
