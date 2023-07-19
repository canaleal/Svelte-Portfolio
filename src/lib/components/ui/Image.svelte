<script lang="ts">
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-sm';
	export let hasColor = true;
	export let isRounded = false;
	export let scaleOnHover = true;

	imageUrl = imageUrl ?? '/assets/images/About.webp';
	const isVideo = imageUrl.endsWith('.mp4');
</script>

{#if isVideo}
	<video
		height="auto"
		width="100%"
		class={`object-cover   ${imageSize}`}
		controls
		autoplay
		loop
		muted
	>
		<source src={imageUrl} type="video/mp4" />
	</video>
{:else}
	
		<img
			height="auto"
			width="100%"
			loading="lazy"
			class={`img-card object-cover ${scaleOnHover ? 'img-card-scale' : ''} ${
				isRounded ? 'rounded-lg' : ''
			}  ${imageSize} ${hasColor ? 'img-card-hasColor' : ''}`}
			src={imageUrl}
			alt={imageAlt}
		/>
	
{/if}
