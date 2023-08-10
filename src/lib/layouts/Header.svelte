<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import Grid from './Grid.svelte';
</script>

<Grid extraClasses="h-full" isOverflowHidden={false}>
	<Card extraClasses=" h-full  justify-center  gap-8 " hasShadow={false} isRounded={false}>
		<div class="flex flex-col gap-2 hidden-animation hidden-animation-left">
			<p class="text-decor">991514</p>
			<p class="text-subtitle text-white">PORTFOLIO</p>
			<Underline color="bg-white mr-auto" />
			<p class="text-title my-2 text-white">Alex Canales</p>

			<p class="text-white">Full Stack Developer</p>

			<div class="mr-auto mt-8">
				<NavbarArrow url={'#about'} />
			</div>
		</div>
	</Card>
</Grid>
