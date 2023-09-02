<script lang="ts">
	import { PROGRAMMING_LANGUAGES } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import Grid from './Grid.svelte';
</script>

<section id="about" class="bg-smoke py-16 z-2">
	<Grid lgGridColSpan={2}>
		<div class="flex flex-col  w-full hidden-animation hidden-animation-bottom ">
			<p class="text-title ">About</p>

			<p class="mt-4">
				As a <span class="font-bold text-primary">full-stack developer</span> with a deep-rooted interest
				in Machine Learning and Data Science, I am continuously driven by an intellectual curiosity to
				explore cutting-edge advancements in artificial intelligence.
			</p>

			<div class="flex flex-row mt-8">
				<IconsBar
					icons={PROGRAMMING_LANGUAGES}
					isDevicon={true}
					iconSize={'w-6'}
					hasIconColor={true}
				/>
			</div>
		</div>

	
	</Grid>
</section>
