<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta name="portfolio" content="noindex nofollow" />
	<html lang="en" />
	<link rel="stylesheet" href="src/styles/style.css">
</svelte:head>

<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<section class="main">
	<slot />
	<Footer />
</section>
