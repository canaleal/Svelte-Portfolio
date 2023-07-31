<script lang="ts">
	import { getColSpan } from '$lib/utils/grid';
	import Card from '../card/Card.svelte';
	import CodeJson from '../device/CodeJSON.svelte';
	import Button from '../ui/Button.svelte';
	import ColorPalette from '../ui/ColorPalette.svelte';
	import IconsBar from '../ui/IconsBar.svelte';
	import ListView from '../ui/ListView.svelte';
	import TextDescription from '../ui/TextDescription.svelte';
	import Underline from '../ui/Underline.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import WebMock from '../device/WebMock.svelte';
	import type { IColContent } from '$lib/types/project-types';
	export let colContent: IColContent;
</script>

<div class="flex rounded-lg flex-col h-full bg-white">
	{#if colContent.isWebMockup}
		<WebMock>
			<Image
				imageUrl={colContent.imageUrl}
				imageAlt={colContent.title}
				imageSize={colContent.imageSize}
				scaleOnHover={false}
			/>
		</WebMock>
	{:else if colContent.imageUrl}
		<Card
			extraClasses="relative"
			colSize={getColSpan(colContent.colSpan)}
			isOverflowHidden={true}
			hasShadow={colContent.hasShadow}
			isRounded={true}
		>
			<Image
				imageUrl={colContent.imageUrl}
				imageAlt={colContent.title}
				imageSize={colContent.imageSize}
			/>

			{#if colContent.showImageSource != false}
				<div class="bg-dark-trans absolute p-2 top-0 right-0 rounded-bl-lg">
					<a class="p-2" href={colContent.imageUrl} target="_blank" rel="noreferrer">Source</a>
				</div>
			{/if}
		</Card>
	{/if}

	{#if colContent.title}
		<div class="flex flex-col px-8 py-4">
			<p class="text-subtitle ">{colContent.title}</p>
			<Underline isRounded={false} />

			<div class="flex flex-col gap-4">
				{#if colContent.description}
					<TextDescription text={colContent.description} hasEllipsis={false} />
				{/if}
				{#if colContent.listItems}
					<ListView items={colContent.listItems} />
				{/if}
			</div>
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
					bgColor={linkButton.bgColor}
				/>
			{/each}
		</div>
	{/if}

	{#if colContent.tools}
		<div class="mt-auto bg-smoke rounded-b-lg py-4 px-8">
			<IconsBar icons={colContent.tools} isDevicon={true} iconSize={'w-6'} hasIconColor={true} />
		</div>
	{/if}

	{#if colContent.isCodeJson}
		<CodeJson
			codeTheme={colContent.codeJsonTheme}
			dataPath={colContent.codeJsonURLPath}
			data={colContent.codeJsonData}
		/>
	{/if}

	{#if colContent.isColorPalette}
		<ColorPalette colorPalette={colContent.colorPalette} />
	{/if}
</div>
