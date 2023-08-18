<script lang="ts">
	import { CONTACT_INFO, PROGRAMMING_LANGUAGES, SKILLS, WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';

	import Grid from './Grid.svelte';
</script>

<div
	class="flex flex-col container text-center justify-center w-full hidden-animation hidden-animation-bottom"
>
	<p class="text-title ">About</p>

	<p class="mt-4 w-1/2 mx-auto">
		Full-stack developer with a profound interest in Machine Learning and Data Science. Driven by
		curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
		techniques that can refine my problem-solving skills.
	</p>
	<div class="flex flex-row mt-12 mx-auto">
		<IconsBar icons={PROGRAMMING_LANGUAGES} isDevicon={true} iconSize={'w-6'} hasIconColor={true} />
	</div>
</div>

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
					hasIconColor={true}
					iconSize={'w-8'}
					justify={'justify-center'}
					altTexts={[work.company]}
				/>
			</div>
		</div>
	{/each}
</Grid>

