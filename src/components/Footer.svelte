<script lang="ts">
	import { ABOUT_LIST, APPLICATION_LIST, PORTFOLIO_LIST } from "../constants/footer";

</script>
<hr class="mt-auto"/>
<footer class="bg-smoke  py-8 px-8">
	
	<div class="grid grid-cols-1 sm:grid-cols-3 pb-8">
		<div class="col-span-1 py-2">
			<p class="font-bold">Portfolio</p>
			{#each PORTFOLIO_LIST as item}
				<div class="my-2">
					<a href={ `${item.url}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>

		<div class="col-span-1 py-2">
			<p class="font-bold">Tools</p>
			{#each APPLICATION_LIST as item}
				<div class="my-2">
					<a href={ `${item.url}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
		<div class="col-span-1 py-2">
			<p class="font-bold">Links</p>
			{#each ABOUT_LIST as item}
				<div class="my-2">
					<a href={ `${item.url}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 py-8">
		<div class="col-span-1 py-2">
			<p class="font-bold">Disclaimer</p>
			<p class="font-bold text-xs my-2">© Alex Canales Portfolio. All rights reserved.</p>
			<p class="font-bold text-xs my-2">Website Terms and Policies</p>

			<p class="text-xs my-2">
				If you require any more information or have any questions about our sites disclaimer, please
				feel free to contact me by email at alexcanales766@gmail.com. The Disclaimer was generated
				with the help of the Disclaimer Generator. All the information on this website - Showcase -
				is published in good faith and for general information purpose only.
			</p>
		</div>

		<div class="col-span-1 py-2 " />

		<div class="col-span-1 py-2 ">
			<p class="font-bold">License Terms</p>
			<img
				height={100}
				width={150}
				class="h-16 my-2"
				src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454"
				data-src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454"
				loading="lazy"
				alt="RRBG logo_Horizontal_Black_CMYK"
				data-was-processed="true"
			/>
			<p class="text-xs my-2">
				The contents of the Royal Botanical Gardens site are copyrighted and redistribution,
				reproductions, or publication of its contents is prohibited without the express written
				consent of Royal Botanical Gardens.
			</p>
		</div>
	</div>
</footer>
