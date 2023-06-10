<script lang="ts">
	import Image from '$lib/widgets/Image.svelte';
    export let url = '';
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-sm';
    export let target = imageUrl.includes('http') ? '_blank' : '';

</script>

<a href={url} {target} rel="noreferrer" aria-label={url}>
	<Image imageUrl={imageUrl} imageAlt={imageAlt ?? imageUrl} {imageSize} />
</a>
