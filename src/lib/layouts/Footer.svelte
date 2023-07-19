<script lang="ts">
	import { ABOUT_LIST } from '$lib/constants/footer';
</script>

<footer class="z-25 bg-dark bg-grid  shadow-lg ">
	<div class="grid grid-cols-1 lg:grid-cols-3 px-8  py-16 container">
		<div class="col-span-1 text-center lg:text-left py-4">
			<p>2023 © Alex Canales</p>
		</div>

		<div class="col-span-1 text-center lg:text-center py-4">
			<p>alexcanales766@gmail.com</p>
		</div>
		<div class="col-span-1 text-right   py-8 lg:py-4">
			<div class="flex flex-row justify-center lg:justify-end gap-4">
				{#each ABOUT_LIST as item (item.id)}
					<a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
						<i class={item.icon + ' fa-lg footer-icon'} />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
