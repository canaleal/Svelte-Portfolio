<script lang="ts">
	import { WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';

</script>

<section id="about" class="bg-smoke py-32 z-2">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  p-2 container  ">
		{#each WORK_EXPERIENCE as work, idx}
			<div
				class="flex-1 flex flex-col  h-full hidden-animation hidden-animation-bottom delay-with-var text-center"
				style="--delay: {idx * 150}ms"
			>
				<p class="text-subtitle text-white">{work.company}</p>
				<p class="mt-2">{work.role}</p>
				<p>{work.time}</p>

				<div class="h-12 flex flex-col mt-4">
					<IconsBar
						icons={[work.imageUrl]}
						isDevicon={false}
						hasIconColor={false}
						iconSize={'w-8'}
						justify={'justify-center'}
						altTexts={[work.company]}
					/>
				</div>
			</div>
		{/each}
	</div>
</section>
