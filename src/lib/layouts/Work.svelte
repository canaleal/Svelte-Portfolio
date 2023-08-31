<script lang="ts">
	import { PROGRAMMING_LANGUAGES, WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';

	import Grid from './Grid.svelte';
</script>


<Grid extraClasses="mt-32" lgGridColSpan={4} isOverflowHidden={false}>
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
</Grid>
