<script lang="ts">
	import Card from './educationCard.svelte';
	import { EDUCATION } from './constants/index';
</script>

<section id="Education" class="flex flex-col py-16 gap-16">
	<h2 class="text-white text-xl font-bold ">Education</h2>


	{#each EDUCATION as education}
		<Card {education} />
	{/each}
</section>
