<script lang="ts">
	import Card from './card.svelte';
	import { PROJECTS } from './constants/index';
</script>

<section id="Projects" class="flex flex-col gap-2">
	{#each PROJECTS as project}
		<Card {project} />
	{/each}
</section>
