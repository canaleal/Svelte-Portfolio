<script lang="ts">
	export let text: string;
	export let hasEllipsis = true;
</script>

<div class="flex flex-col">
	<div class={`${hasEllipsis ? 'ellipsis' : ''} `}>
		<p>{text}</p>
	</div>
</div>
