<script lang="ts">
	import CarElementCard from '../../widgets/card/CarElementCard.svelte';
	import type { carElementType } from '../../types/car-types';
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';

	export let data: any;
	let carElements: carElementType[] = data.logos;
</script>

<section>
	<SectionHeader title="Car Logos" color="bg-green" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-4  lg:grid-cols-8 gap-4 py-8 px-4">
		{#if carElements}
			{#each carElements as carElement}
				<CarElementCard {carElement} />
			{/each}
		{/if}
	</div>
</section>
