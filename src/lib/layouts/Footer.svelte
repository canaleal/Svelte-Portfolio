<script lang="ts">
	import { ABOUT_LIST } from '$lib/constants/footer';
	import Grid from './Grid.svelte';
</script>

<footer class="z-50 bg-dark bg-grid-dot  shadow-lg py-8">
	<Grid>
		<div class="col-span-1 text-center lg:text-left">
			<p>2023 © Alex Canales</p>
		</div>

		<div class="col-span-1 text-center lg:text-center">
			<p>alexcanales766@gmail.com</p>
		</div>
		<div class="col-span-1 text-right  ">
			<div class="flex flex-row justify-center lg:justify-end gap-6">
				{#each ABOUT_LIST as item (item.id)}
					<a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
						<i class={item.icon + ' fa-lg footer-icon'} />
					</a>
				{/each}
			</div>
		</div>
	</Grid>
</footer>
