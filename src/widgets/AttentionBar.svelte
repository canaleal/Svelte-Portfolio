<script lang="ts">
	export let title = 'Attention';
	export let message = 'This is an attention bar';
	export let bgColor = 'bg-smoke';
</script>

<section class={`${bgColor}`}>
	<div class=" py-8 px-4 md:px-32 lg:px-32">
		<p class="font-bold">{title}</p>
		<p class="text-sm mt-2">{message}</p>
	</div>
	<hr />
</section>
