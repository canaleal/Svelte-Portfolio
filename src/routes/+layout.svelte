<script lang="ts">
	import Header from '$lib/features/header/header.svelte';
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


<section class="flex flex-row px-64 py-32">

	<div class="flex-1">
		<Header />
	</div>


	<main class="flex-1">
		<slot />
	</main>
</section>

