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

<section class="flex flex-col h-full px-8 py-8 container">

		<div class="trans grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden" data-scale={2} data-max={100}>
			<div class="relative slide-in-left-slow col-span-1">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="https://live.staticflickr.com/7428/10840707134_7bfd0d687b_b.jpg" />
			</div>

			<div class="relative slide-in-left-slow col-span-1">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="https://www.popsci.com/uploads/2020/10/08/TVOY7JNAWFF5LEAQB2X5OHEHSY-1024x768.jpg" />
			</div>

			<div class="relative slide-in-left-slow col-span-1">
				<Image imageSize="img-card-xl " isRounded={false} imageUrl="https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fi3e2Od-EVTSbNzOjhzIIfA%252FSpacecolony3edit.jpeg-1.jpg&width=910" />
			</div>
			
			<div class=" relative slide-in-right-slow col-span-1">
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

