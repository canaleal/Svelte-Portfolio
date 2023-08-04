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
			<p class="text-title ">About</p>
			<Underline />

			<p class="w-5/6 ">
				Full-stack developer with a profound interest in Machine Learning and Data Science. Driven
				by curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
				techniques that can refine my problem-solving skills.
			</p>
		</div>
		<div class="mt-8">
		<IconsBar icons={PROGRAMMING_LANGUAGES} isDevicon={true} iconSize={'w-6'} hasIconColor={true} isStaggerDelay={true} />
		</div>
	</div>

	<div class="col-span-1 flex flex-col justify-between gap-8 hidden-animation hidden-animation-left">
		<div>
			<p class="text-subtitle">Skills</p>
			<Underline  isRounded={false} />

			
				<ListView items={SKILLS} />

			
		</div>

		<div>
			<p class="text-subtitle">Contact</p>
			<Underline  isRounded={false} />
			<ListView items={CONTACT_INFO} />
		</div>
	</div>

	
</Grid>
