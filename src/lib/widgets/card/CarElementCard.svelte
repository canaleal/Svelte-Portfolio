<script lang="ts">
	import { COLORS } from '$lib/constants';
	import type { ICarElementType } from '$lib/types/car-types';
	import Icons from '../Icons.svelte';
	import Underline from '../Underline.svelte';
	export let carElement: ICarElementType;
</script>

<div class="flex flex-col">
	
	<div class="p-4 h-fit">
	
			<p class="text-subtitle" >{carElement.name}</p>
	
		<div class="py-4"><Underline /></div>
		<div class="ellipsis">
			<p class="my-2 ">{carElement.year}</p>
			<p class="my-2 ">{carElement.type}</p>
		</div>
	</div>
	<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto lex flex-wrap">
		<Icons icons={[carElement.imgUrl]} hasIconColor={true} iconSize="w-12" isLazy={true} />
	</div>
</div>
