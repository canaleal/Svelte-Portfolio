<script lang="ts">
	export let text: string;
	export let showEllipsis = true;
</script>

<div class="flex flex-col">
	<div class={`${showEllipsis ? 'ellipsis' : ''} `}>
		{text}
	</div>
</div>
