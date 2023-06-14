<script lang="ts">
	import Image from '$lib/widgets/Image.svelte';
	import NavbarArrow from '$lib/widgets/NavbarArrow.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
	import { afterUpdate, onMount } from 'svelte';

	let translateDivs: NodeListOf<Element> | Element[] = [];

		onMount(() => {
		translateDivs = document.querySelectorAll('.trans');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					
					window.addEventListener('scroll', function() {
						let scrollPercent = (window.scrollY / window.innerHeight) * 100;
						let translateValue = Math.min(50, scrollPercent * 2); // Adjust the multiplier as needed
						(entry.target as HTMLElement).style.transform = `translate3d(0px, ${translateValue}px, 0px)`;
					});
				}
			});
		});

		translateDivs.forEach((img: Element) => observer.observe(img));
	});
</script>

<section class="flex flex-col h-full px-8 py-8 container">

		<div class="trans grid grid-cols-4 gap-8 overflow-hidden">
			<div class="relative slide-in-left-slow">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="/assets/images/About.webp" />
			</div>
			<div class="relative  slide-in-top-slow">
				<Image
					imageSize="img-card-xl "
					isRounded={false}
					imageUrl="/assets/images/projects/portfolio_trail.webp"
				/>
			</div>

			<div class="relative  slide-in-bottom-slow">
				<Image imageSize="img-card-xl" isRounded={false} imageUrl="/assets/images/Header.webp" />
			</div>
			<div class=" relative slide-in-right-slow">
				<Image
					imageSize="img-card-xl   "
					isRounded={false}
					imageUrl="/assets/images/projects/portfolio_nature.webp"
				/>

				<div class=" overlay h-full w-full text-right flex flex-col justify-center  gap-8 p-8">
					<div>
						<p class="text-subtitle">PORTFOLIO</p>
						<Underline color="bg-white ml-auto" />
						<p class="text-title my-2">Alex Canales</p>

						<p>Full Stack Software Developer</p>
					</div>

					<div class="ml-auto ">
						<NavbarArrow url={'#projects'} />
					</div>
				</div>
			</div>
		</div>
	
</section>
