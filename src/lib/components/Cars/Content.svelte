<script lang="ts">
	import CodeJson from '$lib/widgets/CodeJSON.svelte';
    import Image from '$lib/widgets/Image.svelte';
	import type { ICarElementType } from '$lib/types/car-types';
	export let carElements: ICarElementType[];
</script>

<div class="grid grid-cols-8 gap-8 py-8 px-8 container bg-grid ">
	{#each carElements.slice(70, 78) as carElement, i}
		<Image imageUrl={carElement.imgUrl} isSimpleImage={true} />
	{/each}
</div>

<div class="bg-smoke shadow-md ">
	<div class="container flex lg:flex-row flex-col  py-24 px-8 gap-8">
		<div class="flex-1 flex flex-col  gap-8 js-text">
			<p class="text-subtitle">REST API Sample</p>
			<p class="text-title my-2">Advanced Filtering</p>

			<div class="flex flex-col gap-8">
				<p class="w-1/2">
					With over 800+ car brand logos, the API provides a wide array of filtering options to
					ensure that you get the exact logo you are looking for. You can filter by name, country,
					year, and even by color. The API also provides a search endpoint that allows you to search
					for a specific car brand logo by name.
				</p>

				<p class="w-1/2">
					Don't need all the data? Don't want to call an API. No problem. You can download the
					entire dataset in JSON format, CSV, or even as an SQL file. The dataset is updated
					regularly to ensure that you have the latest brands.
				</p>
			</div>
		</div>

		<div class="flex-1 js-text ">
			<CodeJson color="bg-overlay bg-dark" codeTheme={"andromeda"}  height="h-96 " value={carElements.slice(60, 61)} />
		</div>
	</div>
</div>
