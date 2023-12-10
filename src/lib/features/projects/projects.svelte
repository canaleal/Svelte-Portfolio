<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import Card from './card.svelte';
	import { PROJECTS } from './constants/index';
</script>

<section id="Projects" class="flex flex-col gap-2">
	{#each PROJECTS.slice(0,3) as project}
		<Card {project} />
	{/each}

	<div class="px-8 py-4">
		<Link
			link="/projects"
			extraClasses="text-md font-medium text-white hover:text-indigo-400"
			icon="fa fa-arrow-right"
			text="View All Projects"
		/>
	</div>
</section>
