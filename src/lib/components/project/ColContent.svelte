<script lang="ts">
	import { getColSpan } from '$lib/utils/grid';
	import Card from '../card/Card.svelte';
	import CodeJson from '../code/CodeJSON.svelte';
	import Button from '../ui/Button.svelte';
	import ColorPalette from '../ui/ColorPalette.svelte';
	import IconsBar from '../ui/IconsBar.svelte';
	import ListView from '../ui/ListView.svelte';
	import TextDescription from '../ui/TextDescription.svelte';
	import Underline from '../ui/Underline.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	export let colContent: any = {};
</script>

<div class="flex flex-col h-full ">
	{#if colContent.imageUrl}
		<Card
			extraClasses="relative shadow-md"
			colSize={getColSpan(colContent.colSpan)}
			isOverflowHidden={true}
		>
			<Image
				imageUrl={colContent.imageUrl}
				imageAlt={colContent.title}
				imageSize={colContent.imageSize}
			/>

			<div class="bg-dark-trans absolute p-2 top-0 right-0 rounded-bl-lg">
				<a class="p-2" href={colContent.imageUrl} target="_blank" rel="noreferrer">Source</a>
			</div>
		</Card>
	{/if}

	{#if colContent.title}
		<div class="flex flex-col px-8 py-4">
			<p class="text-subtitle ">{colContent.title}</p>
			<Underline isRounded={false} />

			{#if colContent.description}
				<TextDescription text={colContent.description} hasEllipsis={false} />
			{/if}
			{#if colContent.listItems}
				<ListView items={colContent.listItems} />
			{/if}
		</div>
	{/if}

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
			<IconsBar icons={colContent.tools} isDevicon={true} iconSize={'w-6'} hasIconColor={true} />
		</div>
	{/if}

	{#if colContent.isCodeJson}
		<CodeJson codeTheme={colContent.codeJsonTheme} />
	{/if}

	{#if colContent.isColorPalette}
		<ColorPalette colorPalette={colContent.colorPalette} />
	{/if}
</div>
