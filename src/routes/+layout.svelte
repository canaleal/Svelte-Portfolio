<script lang="ts">
	import Footer from '$lib/layouts/Footer.svelte';
	import Navbar from '$lib/layouts/Navbar.svelte';
	import { afterUpdate } from 'svelte';
	import '../styles/style.css';

	let x = 0;
	let y = 0;

	const updateMousePosition = (event: { clientX: number; clientY: number }) => {
		x = event.clientX;
		y = event.clientY;
	};

	afterUpdate(() => {
		const cardRefs = document.querySelectorAll('.js-trans');
		const slideInObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const delay = (entry.target as HTMLElement).dataset.delay;
					(entry.target as HTMLElement).classList.add(delay ?? 'fade-in-slow');

					slideInObserver.unobserve(entry.target);
				}
			});
		});

		cardRefs.forEach((img: Element) => slideInObserver.observe(img));

	});
</script>

<svelte:head>
	<title>Alex Canales</title>
	<meta name="Projects" content="noindex nofollow" />
	<html lang="en" />
	<link rel="stylesheet" href="../src/styles/style.css" />
</svelte:head>

<svelte:window on:mousemove={updateMousePosition} />

<Navbar />
<section class="main overflow-hidden">
	<slot />
</section>
<Footer />

<div class="cursor-circle" style="left: {x}px; top: {y}px;" />
