<script lang="ts">
	import { PROGRAMMING_LANGUAGES } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
</script>

<section id="about" class="bg-smoke py-16">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-2 container  ">
		<div class="flex flex-col  w-full hidden-animation hidden-animation-bottom ">
			<p class="text-title ">About</p>

			<p class="mt-4">
				I'm a <span class="font-bold text-primary">full-stack developer</span> with a strong interest in Machine Learning and Data Science. I'm constantly motivated by a desire to stay updated on the latest innovations in artificial intelligence.
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
	</div>
</section>
