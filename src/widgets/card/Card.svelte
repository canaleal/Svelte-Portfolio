<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let slideAnimation: string | null = null;
	export let speed: number = 1;
	const cardSpeed: string = ((speed + 1) * 100).toString() + 'ms';
</script>

<div style="--speed: {cardSpeed};" class="card {colSize} {slideAnimation} shadow-xl flex flex-col ">
	<slot />
</div>
