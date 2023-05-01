<script lang="ts">
	import type { ITrafficCamera } from '$lib/types/traffic-camera-types';
	import AttentionBar from '$lib/widgets/AttentionBar.svelte';
	import CameraElementCard from '$lib/widgets/card/CameraElementCard.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import SectionHeader from '$lib/widgets/SectionHeader.svelte';

	export let data: any;
	let trafficCameras: ITrafficCamera[] = data.trafficCameras;
</script>

<section>
	<SectionHeader title="Traffic Cameras" />
	<AttentionBar
		message="Toronto Traffic Cameras currently in use, with real time images."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-4  lg:grid-cols-4 gap-8 py-8 px-8">
		{#if trafficCameras}
			{#each trafficCameras as trafficCamera, i}
				<Card colSize="col-span-1" slideAnimation="slide-in-right" speed={2}>
					<CameraElementCard {trafficCamera} />
				</Card>
			{/each}
		{/if}
	</div>
</section>
