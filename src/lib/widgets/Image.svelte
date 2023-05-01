<script lang="ts">
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-2xl';
</script>

<img
	height="100"
	width="auto"
	src={`${imageUrl}`}
	alt={`${imageAlt}`}
	class="img-card {imageSize} "
	loading="lazy"
/>
