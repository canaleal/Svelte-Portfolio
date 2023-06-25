<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import IconsBar from '$lib/widgets/IconsBar.svelte';
	import Image from '$lib/widgets/Image.svelte';
	export let optionalContent: IOptionalContent;
</script>



<div class="container grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8  py-24 px-8">
	{#each optionalContent.colContent as colContent}
		{#if colContent.imageUrl}
			<Image imageUrl={colContent.imageUrl} imageAlt={colContent.title} imageSize={'img-card-md'} />
		{:else}
			<div class="col-span-1 flex flex-col  gap-8">
				{#if colContent.subtitle}
					<p class="text-subtitle">{colContent.subtitle}</p>
				{/if}
				<p class="text-title my-2">{colContent.title}</p>

				<p class="w-96">
					{colContent.description}
				</p>

				{#if colContent.tools}
					<div class="mt-auto">
						<IconsBar
							icons={colContent.tools}
							isDevicon={true}
							iconSize={'w-6'}
							hasIconColor={true}
						/>
					</div>
				{/if}
			</div>
		{/if}
	{/each}
</div>
