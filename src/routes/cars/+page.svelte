<script lang="ts">
	import { onMount } from 'svelte';

	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
	import { supabase } from '../../services/client';
	import LoadingSpinner from '../../widgets/LoadingSpinner.svelte';

	let isLoading = true;
	let carLogos: any[] | null = [];
	const fetchCars = async () => {
		try {
			const { data, error } = await supabase
				.from('carlogos')
				.select('*')
				.order('id', { ascending: true });

			if (error) throw error;

			carLogos = data;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	};

	onMount(async () => {
		fetchCars();
	});
</script>

<section>
	<SectionHeader title="Car Logos" color="bg-blue" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	{#if isLoading}
		<LoadingSpinner />
	{:else}
		<div id="projects" class="grid  grid-cols-1 md:grid-cols-12 gap-4 py-8 px-4">
			{#if carLogos}
				{#each carLogos as carlogo}
					<div class="col-span-1 flex flex-col ">
						<img src={carlogo.imgUrl} alt={''} />
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</section>
