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
