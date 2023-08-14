<script lang="ts">
	import Footer from '$lib/layouts/Footer.svelte';
	import Navbar from '$lib/layouts/Navbar.svelte';
	import "../styles/style.css"
	let x = 0;
	let y = 0;
	const updateMousePosition = (event: { clientX: number; clientY: number }) => {
		x = event.clientX;
		y = event.clientY;
	};

</script>
<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta name="description" content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces." />
	
	<html lang="en" />

</svelte:head>

<svelte:window on:mousemove={updateMousePosition} />

<Navbar />
<main class="main main-no-top overflow-hidden ">
	<slot />
	<Footer />
</main>
<div class="cursor-circle" style="left: {x}px; top: {y}px;" />
