<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/style.css';
</script>

<Navbar />
<section class="main">
	<div class="p-container  px-4   ">
		<slot />
	</div>

	<Footer />
</section>
