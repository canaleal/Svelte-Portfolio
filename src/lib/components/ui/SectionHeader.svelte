<script lang="ts">
	import Underline from "./Underline.svelte";

	export let id = '';
	export let color = '';
	export let rounded = '';
	export let title = 'Section Header';
	export let zHeight = 'z-6';
	export let alignText = 'text-left';
</script>


<div id={id} class={`${color} ${rounded} ${alignText}  top-0 ${zHeight} container p-2`}>
	<p class="text-title">{title}</p>
	<Underline />
</div>
