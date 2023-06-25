<script lang="ts">

	import CodeJson from "$lib/widgets/CodeJSON.svelte";
    import type { ICarElementType } from "$lib/types/car-types";
    export let carElements: ICarElementType[ ]

</script>

<div id="cars" class="bg-dark bg-topography  text-white overflow-hidden">
	<div class="bg-overlay ">
		<div class="container flex lg:flex-row flex-col py-24 px-8 ">
			<div class="flex-1 flex flex-col  gap-8 ">
				<p class="text-subtitle">Open Source API</p>

				<p class="text-title my-2">800+ High Resolution Images</p>

				<div class="flex flex-row gap-8">
					<p class="w-1/2">
						Extensive digital library dedicated solely to high-quality images of car brand logos
						from around the world. Providing real-time access to a wide array of car logos in
						various resolutions, it serves as a valuable resource for developers, businesses, and
						automobile enthusiasts.
					</p>
				</div>
			</div>

			<div class="flex-1 trans" data-scale={3} data-max={200} data-direction={1}>
				<CodeJson value={carElements.slice(55, 56)} />
			</div>
		</div>
	</div>
</div>