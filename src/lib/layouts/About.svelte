<script lang="ts">
	import { CONTACT_INFO, PROGRAMMING_LANGUAGES, SKILLS } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import ListView from '$lib/components/ui/ListView.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import Grid from './Grid.svelte';
</script>

<Grid isOverflowHidden={false}>
	<div class="col-span-1 flex flex-col  ">
		<div class="flex flex-col hidden-animation hidden-animation-left">
			<p class="text-title text-white">About</p>
			<Underline color="bg-white" />

			<p class="w-5/6 my-4">
				Full-stack developer with a profound interest in Machine Learning and Data Science. Driven
				by curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
				techniques that can refine my problem-solving skills.
			</p>
		</div>

		<IconsBar icons={PROGRAMMING_LANGUAGES} isDevicon={true} iconSize={'w-6'} hasIconColor={true} isStaggerDelay={true} />
	</div>

	<div class="col-span-1 flex flex-col justify-between gap-8 ">
		<div>
			<p class="text-subtitle">Skills</p>
			<Underline color={'bg-white'} isRounded={false} />

			<ListView items={SKILLS} />
		</div>

		<div>
			<p class="text-subtitle">Contact</p>
			<Underline color={'bg-white'} isRounded={false} />
			<ListView items={CONTACT_INFO} />
		</div>
	</div>

	<div class="col-span-1 flex flex-col h-full">
		<div class="w-[1px] h-10 ml-auto mt-auto bg-smoke" />
		<div class="w-10 h-[1px] ml-auto  bg-smoke" />
		<p class="text-decor ml-auto">About Comp</p>
	</div>
</Grid>
