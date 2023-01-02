<script lang="ts">
	import { COLORS } from '../../constants';
	import type { carElementType } from '../../types/car-types';
	export let carElement: carElementType;
</script>
<div style="--speed: 1s;" class="slide-in-right card  col-span-1 shadow-xl flex flex-col ">
	<div class="{COLORS[((carElement.id - 1) % 10) + 1]}  py-5 text-center text-white sticky top-0">
		<h1 class="text-xl  ">{carElement.name}</h1>
	</div>
	<div class="p-4 h-fit">
		<div class="ellipsis">
			<p class="my-2 ">{carElement.year}</p>
			<p class="my-2 ">{carElement.type}</p>
		</div>
	</div>
	<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
		<div class="flex flex-wrap">
			<img
				height="100"
				width="auto"
				class={`img-icon w-12 mx-2 py-2`}
				src={carElement.imgUrl}
				alt={''}
				loading="lazy"
			/>
		</div>
	</div>
</div>
