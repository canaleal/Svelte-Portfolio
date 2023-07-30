<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
</script>

<section class="flex flex-col h-full relative overflow-hidden">
	<div class="slide-in-left-slow">
		<Image
			imageSize="img-card-4xl img-card-animateSaturation "
			isRounded={false}
			imageUrl="/assets/images/vsc/winter_forest.webp"
			scaleOnHover={false}
		/>
	</div>

	<div class="absolute h-full w-full  bg-dark-trans-lr ">
		<div
			class="bg-grid-dot h-full container  grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8  py-16"
		>
			<div class="col-span-1 flex flex-col h-full slide-in-left-slow">
				<div class="w-[1px] h-10 mt-auto bg-smoke" />
				<div class="w-10 h-[1px]   bg-smoke" />
				<p class="text-decor">Header Comp</p>
			</div>
			<div />
			<Card
				extraClasses=" h-full text-right justify-center  gap-8 slide-in-right-slow"
				hasShadow={false}
				isRounded={false}
			>
				<div class="flex flex-col">
					<p class="text-decor">991514</p>
					<p class="text-subtitle text-white">PORTFOLIO</p>
					<Underline color="bg-white ml-auto" />
					<p class="text-title my-2 text-white">Alex Canales</p>

					<p>Full Stack Developer</p>
				</div>

				<div class="ml-auto">
					<NavbarArrow url={'#about'} />
				</div>
			</Card>
		</div>
	</div>
</section>
