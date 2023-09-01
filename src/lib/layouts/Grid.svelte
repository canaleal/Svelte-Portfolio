<script lang="ts">
	
	import { getLgGridColSpan } from '$lib/utils/tailwindGrid';
	export let lgGridColSpan = 3;
	export let isOverflowHidden = false;
	export let extraClasses = "";
	const gridColSpan = getLgGridColSpan(lgGridColSpan);
</script>

<div
	class="grid  grid-cols-1 md:grid-cols-2  {gridColSpan} {isOverflowHidden
		? 'overflow-hidden'
		: ''}  gap-10  p-2 container  {extraClasses} "
>
	<slot />
</div>
