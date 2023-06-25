<script lang="ts">
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-2xl';
	export let hasColor = true;
	export let isRounded = false;
	export let scaleOnHover = true;
	export let extraClasses = '';
	export let isSimpleImage = false;

	imageUrl = imageUrl ?? '/assets/images/About.webp';
	const isVideo = imageUrl.endsWith('.mp4');
</script>

{#if isVideo}
	<video
		height="auto"
		width="100%"
		class={`object-cover card  ${imageSize} ${extraClasses}`}
		controls
		autoplay
		loop
		muted
	>
		<source src={imageUrl} type="video/mp4" />
	</video>
{:else if isSimpleImage}
	<img
		height="100%"
		width="auto"
		title={imageAlt}
		class={`${extraClasses} ${isRounded ? 'rounded-lg' : ''}`}
		alt={imageAlt}
		src={imageUrl}
		loading={'lazy'}
	/>
{:else}
	<div class="overflow-hidden">
		<img
			height="auto"
			width="100%"
			loading="lazy"
			class={`img-card ${scaleOnHover ? 'img-card-scale' : ''} ${
				isRounded ? 'rounded-lg' : ''
			}  ${extraClasses} ${imageSize} ${hasColor ? 'img-card-hasColor' : ''}`}
			src={imageUrl}
			alt={imageAlt}
		/>
	</div>
{/if}
