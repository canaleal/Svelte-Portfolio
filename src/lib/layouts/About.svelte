<script lang="ts">
	import { PROGRAMMING_LANGUAGES } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
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
