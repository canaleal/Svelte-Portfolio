<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import Navigation from './navigation.svelte';
</script>

<header id="Header" class="flex flex-col  h-full xl:fixed">
	<h1 class="text-5xl text-zinc-50 uppercase font-extrabold">Alex Canales</h1>
	<h2 class="text-md font-semibold text-foam-300 mt-4">Software Developer</h2>

	<Navigation extraClasses="mt-16" />

	<div class="flex flex-row gap-6 mt-16 xl:mt-32 w-full">
		<Link
			link="https://github.com/canaleal"
			extraClasses="hover:text-zinc-50  text-amber-300 yellow-shadow-text  cursor-hover-trigger "
		>
			<span class="fa-brands fa-github text-3xl" />
		</Link>

		<Link
			link="https://www.linkedin.com/in/alex-canales/"
			extraClasses="hover:text-zinc-50 text-indigo-300 indigo-shadow-text cursor-hover-trigger "
		>
			<span class="fa-brands fa-linkedin text-3xl" />
		</Link>

		<Link
			link="https://codepen.io/canaleal"
			extraClasses="hover:text-zinc-50 text-foam-300 green-shadow-text  cursor-hover-trigger "
		>
			<span class="fa-brands fa-codepen text-3xl " />
		</Link>
	</div>
</header>
