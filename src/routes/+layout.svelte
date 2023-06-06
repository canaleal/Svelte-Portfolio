<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/style.css';
</script>

<Navbar />
<section class="main">
	<slot />

	<Footer />
</section>
