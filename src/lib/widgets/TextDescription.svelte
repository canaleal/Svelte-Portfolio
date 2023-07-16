<script lang="ts">
	export let text: string;
	export let hasEllipsis = true;
</script>

<div class={`${hasEllipsis ? 'ellipsis' : ''} `}>
	<p>{text}</p>
</div>
