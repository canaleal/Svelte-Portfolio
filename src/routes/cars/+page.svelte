<script lang="ts">
	import { COLORS } from '../../constants';
	import type { carlogosType } from '../../types/carlogos-types';
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';

	export let data: any;
	let carLogos: carlogosType[] = data.logos;
	console.log(carLogos);
</script>

<section>
	<SectionHeader title="Car Logos" color="bg-blue" />
	<AttentionBar
		message="This page contains my Github projects. Both complete, and currently in development."
	/>

	<div id="projects" class="grid  grid-cols-1 md:grid-cols-8 gap-4 py-8 px-4">
		{#if carLogos}
			{#each carLogos as carlogo}
				<div class="card col-span-1 shadow-xl flex flex-col ">
					<div
						class="{COLORS[((carlogo.id - 1) % 10) + 1]}  py-5 text-center text-white sticky top-0"
					>
						<h1 class="text-xl  ">{carlogo.name}</h1>
					</div>

					<div class="p-4 h-fit">
						<div class="ellipsis">
							<p class="my-2 ">{carlogo.year}</p>
							<p class="my-2 ">{carlogo.type}</p>
						</div>
					</div>

					<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
						<div class="flex flex-wrap">
							<img
								height="100"
								width="auto"
								class={`img-icon w-12 mx-2 py-2`}
								src={carlogo.imgUrl}
								alt={''}
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
