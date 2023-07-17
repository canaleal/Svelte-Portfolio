<script lang="ts">
	export let imageUrl: string = '';
	export let imageAlt: string = '';
	export let imageSize = 'img-card-sm';
	export let hasColor = true;
	export let isRounded = false;
	export let scaleOnHover = true;
	export let extraClasses = '';

	export let url: string = '';
	export let target = imageUrl.includes('http') ? '_blank' : '';

	imageUrl = imageUrl ?? '/assets/images/About.webp';
	const isVideo = imageUrl.endsWith('.mp4');
</script>

{#if url}
	<a href={url} {target} rel="noreferrer" aria-label={url}>
		<div class="overflow-hidden">
			<img
				height="auto"
				width="100%"
				loading="lazy"
				class={`img-card object-cover ${scaleOnHover ? 'img-card-scale' : ''} ${
					isRounded ? 'rounded-lg' : ''
				}  ${extraClasses} ${imageSize} ${hasColor ? 'img-card-hasColor' : ''}`}
				src={imageUrl}
				alt={imageAlt}
			/>
		</div>
	</a>
{:else if isVideo}
	<video
		height="auto"
		width="100%"
		class={`object-cover   ${imageSize} ${extraClasses}`}
		controls
		autoplay
		loop
		muted
	>
		<source src={imageUrl} type="video/mp4" />
	</video>
{:else}
	<div class="overflow-hidden">
		<img
			height="auto"
			width="100%"
			loading="lazy"
			class={`img-card object-cover ${scaleOnHover ? 'img-card-scale' : ''} ${
				isRounded ? 'rounded-lg' : ''
			}  ${extraClasses} ${imageSize} ${hasColor ? 'img-card-hasColor' : ''}`}
			src={imageUrl}
			alt={imageAlt}
		/>
	</div>
{/if}
