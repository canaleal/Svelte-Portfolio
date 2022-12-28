<svelte:head>
	<title>Alex Canales Portfolio</title>
	<meta name="portfolio" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../styles/style.css';
</script>

<Navbar />
<section class="main">
	<slot />
	<Footer />
</section>
