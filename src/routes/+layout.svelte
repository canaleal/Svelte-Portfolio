<script lang="ts">
	import Footer from '$lib/layouts/Footer.svelte';
	import Navbar from '$lib/layouts/Navbar.svelte';
	import { slide } from 'svelte/transition';
	import '../styles/style.css';

	let x = 0;
	let y = 0;

	const updateMousePosition = (event: { clientX: number; clientY: number }) => {
		x = event.clientX;
		y = event.clientY;
	};
</script>

<svelte:head>
	<title>Alex Canales</title>
	<meta name="Projects" content="noindex nofollow" />
	<html lang="en" />
	<link rel="stylesheet" href="../src/styles/style.css" />
</svelte:head>

<svelte:window on:mousemove={updateMousePosition} />

<Navbar />

<section class="main main-no-top overflow-hidden ">
	<slot />
	<Footer />
</section>

<div class="cursor-circle" style="left: {x}px; top: {y}px;" />
