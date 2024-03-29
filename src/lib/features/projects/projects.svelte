<script lang="ts">
	import Link from '$lib/components/form/link.svelte';
	import Card from './projectsCard.svelte';
	import { PROJECTS } from './constants/index';

</script>

<section id="Projects" class="flex flex-col gap-2">
	{#each PROJECTS.slice(0,4) as project}
		<Card {project}/>
	{/each}
	<div class="py-4">
		<Link link="/projects">
			<span class="fa fa-arrow-right " />
			{"View All Projects"}
		</Link>
	</div>
</section>
