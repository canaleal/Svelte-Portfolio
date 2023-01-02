<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let slideAnimation: string | null = null;
</script>

<div class="card {colSize} {slideAnimation} shadow-xl flex flex-col ">
	<slot />
</div>
