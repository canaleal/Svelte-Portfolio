<script lang="ts">
	import { WEB_MOCK, WATCH_MOCK, TABLET_MOCK, PHONE_MOCK, LAPTOP_MOCK } from '$lib/constants';
	import type { IMockType } from '$lib/types/project-types';
	import WebMock from './WebMock.svelte';
	import LaptopMock from './LaptopMock.svelte';
	import PhoneMock from './PhoneMock.svelte';
	import WatchMock from './WatchMock.svelte';
	import TabletMock from './TabletMock.svelte';
	import ImageContainer from '$lib/components/ui/ImageContainer.svelte';
	export let mockType: IMockType = WEB_MOCK;
	export let imageUrl: string = '';

	export let imageSize: string = '';
	export let imageAlt: string = '';
</script>

{#if mockType === WEB_MOCK}
	<WebMock>
		<ImageContainer {imageUrl} {imageAlt} {imageSize} scaleOnHover={false} />
	</WebMock>
{:else if mockType === LAPTOP_MOCK}
	<LaptopMock>
		<ImageContainer {imageUrl} {imageAlt} {imageSize} scaleOnHover={false} />
	</LaptopMock>
{:else if mockType === PHONE_MOCK}
	<PhoneMock>
		<ImageContainer {imageUrl} {imageAlt} {imageSize} scaleOnHover={false} />
	</PhoneMock>
{:else if mockType === TABLET_MOCK}
	<TabletMock>
		<ImageContainer {imageUrl} {imageAlt} {imageSize} scaleOnHover={false} />
	</TabletMock>
{:else if mockType === WATCH_MOCK}
	<WatchMock>
		<ImageContainer {imageUrl} {imageAlt} {imageSize} scaleOnHover={false} />
	</WatchMock>
{/if}
