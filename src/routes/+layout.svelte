<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../styles/style.css';

	let x = 0;
	let y = 0;

	const updateMousePosition = (event: { clientX: number; clientY: number }) => {
		x = event.clientX;
		y = event.clientY;
	};
</script>

<svelte:window on:mousemove={updateMousePosition} />

<Navbar />
<section class="main">
	<slot />

	<Footer />
</section>

<div class="cursor-circle" style="left: {x}px; top: {y}px;" />
