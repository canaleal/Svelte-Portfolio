<script lang="ts">
	import Card from './card.svelte';
	import { EDUCATION } from './constants/index';
</script>

<section id="Certificates" class="flex flex-col gap-2">
	{#each EDUCATION as education}
		<Card {education} />
	{/each}
</section>
