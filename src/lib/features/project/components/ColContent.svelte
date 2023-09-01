<script lang="ts">

	import CodeJson from '../../../components/device/CodeJSON.svelte';
	import Button from '../../../components/ui/Button.svelte';
	import ColorPalette from '../../../components/ui/ColorPalette.svelte';
	import IconsBar from '../../../components/ui/IconsBar.svelte';
	import ListView from '../../../components/ui/ListView.svelte';

	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';

	import type { IColContent } from '$lib/types/project-types';
	import MockDevice from '../../../components/device/MockDevice.svelte';
	export let colContent: IColContent;
</script>

<div class="flex flex-col h-full {colContent.mockup || colContent.noSidePadding ? '' : 'bg-white'}">
	{#if colContent.mockup}
		<MockDevice
			mockType={colContent.mockup}
			imageUrl={colContent.imageUrl}
			imageSize={colContent.imageSize}
			imageAlt={colContent.title}
		/>
	{/if}

	{#if colContent.title}
		<div class="flex flex-col {colContent.noSidePadding ? 'py-4' : 'py-8 px-8'}">
			<p class="{colContent.isLargeTitle ? 'text-title' : 'text-subtitle'} mb-4">
				{colContent.title}
			</p>

			<div class="flex flex-col gap-4">
				{#if colContent.description}
					
					<p>{colContent.description}</p>
				{/if}
				{#if colContent.listItems}
					<ListView items={colContent.listItems} />
				{/if}
			</div>
		</div>
	{/if}

	{#if colContent.linkButtons}
		<div class="flex flex-row gap-4 mt-auto  {colContent.noSidePadding ? 'py-8' : 'py-8 px-8'}">
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
		<div class="mt-auto {colContent.noSidePadding ? 'py-4' : 'py-4 px-8 bg-smoke  '}">
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

	{#if !colContent.mockup && colContent.imageUrl}
		<ImageContainer
			imageUrl={colContent.imageUrl}
			imageAlt={colContent.title}
			imageSize={colContent.imageSize}
			scaleOnHover={colContent.scaleOnHover}
		/>
	{/if}
</div>
