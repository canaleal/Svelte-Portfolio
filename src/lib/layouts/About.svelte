<script lang="ts">
	import { PROGRAMMING_LANGUAGES } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
</script>

<section id="about" class="bg-smoke py-16 z-2">
	<div class="flex flex-col container w-full hidden-animation hidden-animation-bottom px-2">
		<p class="text-title ">About</p>

		<p class="mt-4 w-1/3">
			Full-stack developer with a profound interest in Machine Learning and Data Science. Driven by
			curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
			techniques that can refine my problem-solving skills.
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
</section>
