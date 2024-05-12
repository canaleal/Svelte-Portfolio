<script lang="ts">
	import Card from './experienceCard.svelte';
	import { EXPERIENCE } from './constants';
</script>

<section id="Experience" class="flex flex-col py-16 gap-16">
	<h2 class="text-zinc-50 text-xl font-bold uppercase">Experience</h2>


	{#each EXPERIENCE as experience}
		<Card {experience} />
	{/each}
</section>
