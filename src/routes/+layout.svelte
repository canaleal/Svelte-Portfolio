<script lang="ts">
	import Cursor from '$lib/components/elements/cursor.svelte';
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

<div class="blur-container">
	<div class="vignette-overlay" />
	<div class="content flex flex-col w-screen relative overflow-hidden">
		<slot />
		<ScrollButton position="bottomRight" />
		<Cursor />
	</div>
</div>
