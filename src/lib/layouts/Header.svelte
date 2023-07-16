<script lang="ts">
	import Image from '$lib/components/ui/Image.svelte';
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import { onMount } from 'svelte';

	let translateDivs: NodeListOf<Element> | Element[] = [];

		onMount(() => {
		translateDivs = document.querySelectorAll('.trans');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', function () {
						let el = entry.target as HTMLElement;
						let scale = parseInt(el.dataset.scale || '2');
						let direction = parseInt(el.dataset.direction || '1');
						let max = parseInt(el.dataset.max || '300');
						let translateValue =
							Math.min(max, (window.scrollY / window.innerHeight) * 30 * scale) * direction;

						el.style.transform = `translate3d(0px, ${translateValue}px, 0px)`;
					});
				}
			});
		});

		translateDivs.forEach((img: Element) => observer.observe(img));
	});
</script>

<section class="flex flex-col h-full container">

		<div class="trans grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden" data-scale={2} data-max={100}>
		
			<div class="relative slide-in-left-slow col-span-2">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="/assets/images/about/space_2.webp" />
			</div>

			<div class="relative slide-in-left-slow col-span-1">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="/assets/images/about/space_3.webp" />
			</div>
			
			<div class=" relative slide-in-right-slow col-span-1">
				<Image
					imageSize="img-card-xl   "
					isRounded={false}
					imageUrl="/assets/images/projects/portfolio_nature.webp"
				/>

				<div class=" bg-overlay absolute top-0 right-0  h-full w-full text-right flex flex-col justify-center  gap-8 p-8">
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

