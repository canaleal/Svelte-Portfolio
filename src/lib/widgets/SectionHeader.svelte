<script lang="ts">
	export let color = '';
	export let rounded = '';
	export let title = 'Section Header';
	export let zHeight = 'z-6';
	export let alignText = 'text-center';
</script>

<hr class="border-2 border-dark" />
<div class={`${color} ${rounded}  py-5 ${alignText}  top-0 ${zHeight}`}>
	<h3>{title}</h3>
</div>
