<script lang="ts">
	import { COLORS } from '$lib/constants';
	import type { ICarElementType } from '$lib/types/car-types';
	import IconImage from '$lib/widgets/IconImage.svelte';
	export let carElement: ICarElementType;
</script>

<div class="{COLORS[((carElement.id - 1) % 10) + 1]}  py-5 text-center text-white sticky top-0">
	<p class="text-xl  ">{carElement.name}</p>
</div>
<div class="p-4 h-fit">
	<div class="ellipsis">
		<p class="my-2 ">{carElement.year}</p>
		<p class="my-2 ">{carElement.type}</p>
	</div>
</div>
<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto lex flex-wrap">
	<IconImage url={carElement.imgUrl} hasColor={true} iconSize="w-12" isLazy={true} />
</div>
