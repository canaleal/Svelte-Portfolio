<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let noHover: boolean = false;
	export let isRounded = true;
	export let slideAnimation: string | null = null;
	export let speed: number = 0;
	const cardSpeed: string = ((speed + 1) * 100).toString() + 'ms';
</script>

<div
	style={slideAnimation ? `--speed: ${cardSpeed}` : ''}
	class="card {isRounded
		? 'card-rounded'
		: ''} {colSize} {slideAnimation} shadow-xl flex flex-col overflow-hidden  {noHover
		? 'card-no-hover'
		: ''}"
>
	<slot />
</div>
