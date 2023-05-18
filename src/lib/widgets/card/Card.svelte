<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let noHover: boolean = false;
	export let isRounded = false;
	export let slideAnimation: string = '';
	export let speed: number = 0;
	export let hasShadow: boolean = true;
	const cardSpeed: string = ((speed + 1) * 100).toString() + 'ms';
</script>

<div
	style={slideAnimation ? `--speed: ${cardSpeed}` : ''}
	class="card  h-full {isRounded
		? 'card-rounded'
		: ''} {colSize} {slideAnimation} {hasShadow? 'shadow-md' : ''} flex flex-col overflow-hidden  {noHover
		? 'card-no-hover'
		: ''}"
>
	<slot />
</div>
