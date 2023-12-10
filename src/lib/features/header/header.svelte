<script lang="ts">
	
	import Link from '$lib/components/form/link.svelte';
	import Navigation from './navigation.svelte';

</script>

<section id="Header" class="flex flex-col p-4">
	<h1 class="text-5xl font-bold changing-gradient-text ">Alex Canales</h1>
	<h2 class="text-xl text-white mt-2">Full Stack Software Developer</h2>

	
		<Navigation extraClasses="mt-16"/>
	

	<div class="flex flex-row gap-4 mt-32">
		<Link
			link="https://github.com/canaleal"
			icon="fa-brands fa-github"
			extraClasses="text-2xl hover:text-white"
		/>
		<Link
			link="https://www.linkedin.com/in/alex-canales/"
			icon="fa-brands fa-linkedin"
			extraClasses="text-2xl hover:text-white"
		/>
	</div>
</section>
