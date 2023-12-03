<script lang="ts">
	import Header from '$lib/features/header/header.svelte';
	import '../styles/style.css';

	import { onMount } from 'svelte';

	let x = 0;
	let y = 0;
	const updateMousePosition = (event: { clientX: number; clientY: number }) => {
		x = event.clientX;
		y = event.clientY;
	};
</script>

<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta
		name="description"
		content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces."
	/>

	<html lang="en" />
</svelte:head>

<svelte:window on:mousemove={updateMousePosition} />

<section class="flex flex-row px-64 py-32">
	<div class="fixed h-screen">
		<Header />
	</div>
	<div class="flex-1 " />
	<main class="flex-1 flex flex-col gap-16">
		<slot />
	</main>
</section>

<div class="cursor-circle" style="left: {x}px; top: {y}px;" />
