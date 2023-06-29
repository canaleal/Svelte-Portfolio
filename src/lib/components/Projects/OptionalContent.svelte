<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import Button from '$lib/widgets/Button.svelte';
	import IconsBar from '$lib/widgets/IconsBar.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	export let optionalContent: IOptionalContent;
</script>

<div class="container grid  grid-cols-1   lg:grid-cols-3 gap-8  py-10 px-8">
	{#each optionalContent.colContent as colContent, i}
		{#if colContent.imageUrl}
			<div class="col-span-{colContent.colSpan} py-4">
				<Image
					imageUrl={colContent.imageUrl}
					imageAlt={colContent.title}
					imageSize={colContent.imageSize || 'img-card-md'}
				/>
			</div>
		{:else}
			<Card colSize="col-span-{colContent.colSpan} bg-white" speed={i + 5}>
				<div class="flex flex-col gap-4  px-8 py-4">
					<div class="flex flex-col ">
						{#if colContent.title}
							<p class="text-subtitle ">{colContent.title}</p>
							<Underline isRounded={false} />
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
				</div>

				{#if colContent.linkButtons}
					<div class="flex flex-row gap-4 mt-auto  py-4 px-8">
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
					<div class="mt-auto bg-smoke  py-4 px-8">
						<IconsBar
							icons={colContent.tools}
							isDevicon={true}
							iconSize={'w-6'}
							hasIconColor={true}
						/>
					</div>
				{/if}
			</Card>
		{/if}
	{/each}
</div>
