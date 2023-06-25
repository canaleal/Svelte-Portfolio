
<script lang="ts">
    import Image from '$lib/widgets/Image.svelte';
	import NavbarArrow from '$lib/widgets/NavbarArrow.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<section class="flex flex-col h-full px-8 py-8 container">
	<div
		class="trans grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden"
		data-scale={2}
		data-max={100}
	>
		<div class="relative slide-in-left-slow col-span-1">
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl={'https://images.unsplash.com/photo-1654789068137-7594793bda0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80'}
			/>
		</div>

		<div class="relative slide-in-left-slow col-span-1 lg:col-span-2">
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="https://di-uploads-pod7.dealerinspire.com/mercedesbenztorontoregionalgroup/uploads/2019/04/CLAcoupeSmallPlate.jpg"
			/>
		</div>

		<div class=" relative slide-in-right-slow col-span-1">
			<Image
				imageSize="img-card-xl   "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_nature.webp"
			/>

			<div class=" overlay h-full w-full text-right flex flex-col justify-center  gap-8 p-8">
				<div>
					<p class="text-subtitle">AUTO BRANDS</p>
					<Underline color="bg-white ml-auto" />
					<p class="text-title my-2">Showcase</p>

					<p>Showing 300+ from sample</p>
				</div>

				<div class="ml-auto ">
					<NavbarArrow url={'#cars'} />
				</div>
			</div>
		</div>
	</div>
</section>
