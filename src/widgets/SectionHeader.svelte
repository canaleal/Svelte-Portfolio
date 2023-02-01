<script lang="ts">
	export let color = '';
	export let rounded = '';
	export let title = 'Section Header';
</script>

<div class={`${color} ${rounded}  py-5 text-center  top-0 z-6`}>
	<h1 class="text-4xl">{title}</h1>
</div>

<hr class="border-2 border-dark" />
