<script lang="ts">
	export let color = '';
	export let rounded = '';
	export let title = 'Section Header';
	export let zHeight = 'z-6';
	export let alignText = 'text-center';
</script>

<div class={`${color} ${rounded}  py-5 ${alignText}  top-0 ${zHeight}`}>
	<h1 class="text-4xl">{title}</h1>
</div>

<hr class="border-2 border-dark" />
