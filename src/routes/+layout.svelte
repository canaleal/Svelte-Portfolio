<script lang="ts">
	import ScrollButton from '$lib/components/elements/scrollButton.svelte';
import '../styles/style.css';
</script>

<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta
		name="description"
		content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces."
	/>
	<html lang="en" />
</svelte:head>


<section class="bg-dark-background text-dark-text">
	<slot />

	<ScrollButton position="bottomRight" />
</section>
