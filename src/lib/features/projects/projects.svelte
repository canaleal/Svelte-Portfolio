<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import Card from './projectsCard.svelte';
	import { PROJECTS } from './constants/index';
</script>

<section id="Projects" class="flex flex-col py-16 gap-16">

	<h2 class="text-zinc-50 text-xl font-bold uppercase">Projects</h2>

	{#each PROJECTS.slice(0, 4) as project}
		<Card {project} />
	{/each}

	<Link link="/projects">
		<span class="fa fa-arrow-right " />
		{'View All Projects'}
	</Link>
</section>
