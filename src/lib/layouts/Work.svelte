<script lang="ts">
	import { WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
</script>

<section id="about" class="bg-dark bg-grid py-16 z-2">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10  p-2 container  ">
		{#each WORK_EXPERIENCE as work, idx}
			<div
				class="flex-1 flex flex-col  h-full hidden-animation delay-with-var text-center relative"
				style="--delay: {idx * 200}ms"
			>
				<p class="text-subtitle text-white">{work.company}</p>
				<p class="mt-2">{work.role}</p>
				<p>{work.time}</p>

				<div class="h-12 flex flex-col mt-4">
					<IconsBar
						icons={[work.imageUrl]}
						isDevicon={false}
						hasIconColor={true}
						iconSize={'w-8'}
						justify={'justify-center'}
						altTexts={[work.company]}
					/>
				</div>

			
			</div>
		{/each}
	</div>
</section>
