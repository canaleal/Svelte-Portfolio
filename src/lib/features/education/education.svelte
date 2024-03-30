<script lang="ts">
	import Card from './educationCard.svelte';
	import { EDUCATION } from './constants/index';
</script>

<section id="Education" class="flex flex-col gap-20">
	{#each EDUCATION as education}
		<Card {education} />
	{/each}
</section>
