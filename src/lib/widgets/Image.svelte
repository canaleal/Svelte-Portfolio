<script lang="ts">
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-2xl';

	imageUrl = imageUrl ?? '/assets/images/projects/toronto_map.webp';
	const isVideo = imageUrl.endsWith('.mp4');
</script>

{#if isVideo}
	<video
		height="auto"
		width="100%"
		class={`object-cover card card-no-hover ${imageSize}`}
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
		class={`object-cover card ${imageSize}`}
		src={imageUrl}
		alt={imageAlt}
	/>
{/if}
