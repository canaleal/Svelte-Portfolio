<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta name="portfolio" content="noindex nofollow" />
	<html lang="en" />
	<link rel="stylesheet" href="src/styles/style.css" />
</svelte:head>

<Navbar />
<section class="main">
	<slot />
	<Footer />
</section>
