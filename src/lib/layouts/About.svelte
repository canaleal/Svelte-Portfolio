<script lang="ts">
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import SpaceShip from '$lib/components/ui/SpaceShip.svelte';
	import { PROGRAMMING_LANGUAGES } from '$lib/constants';
</script>

<section id="about" class="bg-white py-16">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-2 container  ">
		<div class="flex flex-col  w-full hidden-animation  ">
			<p class="text-title ">About</p>

			<p class="mt-4">
				I'm a <span class="font-bold text-primary">full-stack software developer</span> with a strong interest in Machine Learning and Data Science. Always learning and trying new things, hit me up if you want to collaborate on a project!
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

		<div class="flex flex-col" />


	</div>



</section>
