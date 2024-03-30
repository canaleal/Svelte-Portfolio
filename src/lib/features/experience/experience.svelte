<script lang="ts">
	import Card from './experienceCard.svelte';
	import { EXPERIENCE } from './constants';
</script>

<section id="Experience" class="flex flex-col gap-20">
	{#each EXPERIENCE as experience}
		<Card {experience} />
	{/each}
</section>
