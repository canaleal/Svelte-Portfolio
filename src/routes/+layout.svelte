<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<section class="main">
	<slot />
	<Footer />
</section>
