<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import Button from '$lib/widgets/Button.svelte';
	import IconsBar from '$lib/widgets/IconsBar.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
	export let optionalContent: IOptionalContent;
</script>

<div class="container grid  grid-cols-1   lg:grid-cols-3 gap-8  py-16 px-8">
	{#each optionalContent.colContent as colContent}
		{#if colContent.imageUrl}
			<div class="col-span-{colContent.colSpan} py-4">
				<Image
					imageUrl={colContent.imageUrl}
					imageAlt={colContent.title}
					imageSize={'img-card-md'}
				/>
			</div>
		{:else}
			<div class="col-span-{colContent.colSpan} flex flex-col gap-8  py-4">
				<div class="flex flex-col gap-2">
					
					{#if colContent.title}
						<p class="text-title my-2">{colContent.title}</p>
					{/if}
					{#if colContent.description}
						<p class="pr-8">
							{colContent.description}
						</p>
					{/if}
					{#if colContent.subtitle}
						<p class="text-subtitle">{colContent.subtitle}</p>
						<Underline isRounded={false} />
					{/if}
					{#if colContent.listItems}
						<ListView items={colContent.listItems} listType="list-disc" />
					{/if}
				</div>

				{#if colContent.linkButtons}
					<div class="flex flex-row gap-4 mt-auto">
						{#each colContent.linkButtons as linkButton}
							<Button
								url={linkButton.url}
								text={linkButton.title}
								icon={linkButton.icon}
								label={linkButton.title}
								bgColor="btn-primary"
							/>
						{/each}
					</div>
				{/if}

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
