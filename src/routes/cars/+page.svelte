<script lang="ts">
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';

	export let data: any;
	let carLogos = data.logos;
</script>

<section>
	<SectionHeader title="Car Logos" color="bg-blue" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-12 gap-4 py-8 px-4">
		{#if carLogos}
			{#each carLogos as logo}
				<div class="col-span-1 flex flex-col ">
					<img src={logo.imgUrl} alt={''} />
				</div>
			{/each}
		{/if}
	</div>
</section>
