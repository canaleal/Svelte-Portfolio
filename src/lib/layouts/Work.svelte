<script lang="ts">
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import { WORK_EXPERIENCE } from '$lib/constants';
	import Grid from './Grid.svelte';
</script>


	<Grid lgGridColSpan={4} isOverflowHidden={false}>
		{#each WORK_EXPERIENCE as work, idx}
			<div
				class="flex-1 flex flex-col  h-full hidden-animation hidden-animation-bottom delay-with-var"
				style="--delay: {idx * 150}ms"
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
						justify={'justify-left'}
						altTexts={[work.company]}
					/>
				</div>
			</div>
		{/each}
	</Grid>
