<script lang="ts">
	export let id = '';
	export let color = '';
	export let rounded = '';
	export let title = 'Section Header';
	export let zHeight = 'z-6';
	export let alignText = 'text-center';
</script>


<div id={id} class={`${color} ${rounded} mb-8 ${alignText}  top-0 ${zHeight}`}>
	<p class="text-title">{title}</p>
</div>
