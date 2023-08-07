<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import Grid from './Grid.svelte';
</script>

<section class="flex flex-col h-full relative overflow-hidden">
	<div class="w">
		<Image
			imageSize="img-card-4xl img-card-animateSaturation "
			isRounded={false}
			imageUrl="/assets/images/vsc/winter_forest.webp"
			scaleOnHover={false}
		/>
	</div>

	<div class="absolute h-full w-full  bg-dark-trans-rl ">
		
		<Grid extraClasses="h-full py-16" isOverflowHidden={false}>

			<Card
				extraClasses=" h-full  justify-center  gap-8 "
				hasShadow={false}
				isRounded={false}
			>
				<div class="flex flex-col hidden-animation hidden-animation-left">
					<p class="text-decor">991514</p>
					<p class="text-subtitle text-white">PORTFOLIO</p>
					<Underline color="bg-white mr-auto" />
					<p class="text-title my-2 text-white">Alex Canales</p>

					<p>Full Stack Developer</p>

					<div class="mr-auto mt-8">
						<NavbarArrow url={'#about'} />
					</div>
				</div>

				
			</Card>
		</Grid>
			
		
	</div>
</section>
