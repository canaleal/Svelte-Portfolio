<script lang="ts">
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import { WORK_EXPERIENCE } from '$lib/constants';
	import Grid from './Grid.svelte';
</script>

<div class="flex flex-row  justify-center align-middle">
	<Grid lgGridColSpan={4}>
		{#each WORK_EXPERIENCE as work, idx}
			<div class="flex-1 flex flex-col text-center  h-full hidden-animation hidden-animation-left delay-with-var" style="--delay: {idx * 150}ms">
				<p class="text-subtitle uppercase my-auto">{work.company}</p>
				<p class="mt-2">{work.role}</p>
				<p>{work.time}</p>

				<div class="w-[2px] h-5 mt-4 mx-auto bg-smoke" />
				<div class="w-full h-[2px]  bg-smoke " />
				<p class="text-decor mx-auto">{idx + 1}</p>
				<IconsBar
					icons={[work.imageUrl]}
					isDevicon={false}
					hasIconColor={true}
					iconSize={'w-10'}
					justify={'justify-center'}
					altTexts={[work.company]}
				/>
			</div>
		{/each}
	</Grid>

</div>
