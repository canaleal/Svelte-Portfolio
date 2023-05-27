<script lang="ts">
	import { ABOUT_LIST, APPLICATION_LIST, PORTFOLIO_LIST } from '$lib/constants/footer';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<footer class="bg-smoke">
	<div class="grid grid-cols-1 sm:grid-cols-3  p-container px-4 py-16">
		<div class="col-span-1 text-left">
			<p>© Alex Canales. All rights reserved.</p>
		</div>

		<div class="col-span-1 text-center">
			<p>alexcanales766@gmail.com</p>
		</div>
		<div class="col-span-1 text-right">
			<div class="flex flex-row justify-end gap-4">
				{#each ABOUT_LIST as item (item.id)}
					<a href={item.url} target="_blank" rel="noreferrer">
						<i class={item.icon + ' fa-xl'} />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
