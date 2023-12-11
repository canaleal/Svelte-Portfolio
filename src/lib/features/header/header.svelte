<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import Navigation from './navigation.svelte';
</script>

<section id="Header" class="flex flex-col">
	<h1 class="text-5xl font-bold changing-gradient-text ">Alex Canales</h1>
	<h2 class="text-xl text-white mt-2">Full Stack Software Developer</h2>

	<Navigation extraClasses="mt-16" />

	<div class="flex flex-row gap-4 mt-32">
		<Link link="https://github.com/canaleal" extraClasses="hover:text-white">
			<span class="fa-brands fa-github text-3xl" />
		</Link>

		<Link link="https://www.linkedin.com/in/alex-canales/" extraClasses="hover:text-white">
			<span class="fa-brands fa-linkedin text-3xl" />
		</Link>
	</div>
</section>
