<script lang="ts">
	import { ABOUT_LIST, APPLICATION_LIST, PORTFOLIO_LIST } from '$lib/constants/footer';
</script>


<footer class="mt-auto bg-smoke-yellow  py-8 px-8">
	<div class="grid grid-cols-1 sm:grid-cols-3 pb-8">
		<div class="col-span-1 py-2">
			<h5 >Portfolio</h5>
			{#each PORTFOLIO_LIST as item}
				<div class="my-2">
					<a href={`${item.url}`} aria-label={item.url} class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>

		<div class="col-span-1 py-2">
			<h5>Tools</h5>
			{#each APPLICATION_LIST as item}
				<div class="my-2">
					<a href={`${item.url}`} aria-label={item.url} class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
		<div class="col-span-1 py-2">
			<h5>Links</h5>
			{#each ABOUT_LIST as item}
				<div class="my-2">
					<a href={`${item.url}`}  aria-label={item.url} class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 py-8">
		<div class="col-span-1 py-2">
			<h5>Disclaimer</h5>
			<p class="text-xs my-2">© Alex Canales Portfolio. All rights reserved.</p>
			<p class="text-xs my-2">Website Terms and Policies</p>

			<p class="text-xs my-2">
				If you require any more information or have any questions about our sites disclaimer, please
				feel free to contact me by email at alexcanales766@gmail.com. The Disclaimer was generated
				with the help of the Disclaimer Generator. All the information on this website - Showcase -
				is published in good faith and for general information purpose only.
			</p>
		</div>

		<div class="col-span-1 py-2 " />

		<div class="col-span-1 py-2 ">
		
		</div>
	</div>
</footer>
