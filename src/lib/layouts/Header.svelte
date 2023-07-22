<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
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

<section class="flex flex-col h-full relative bg-dark  overflow-hidden">
	<div  class=" grid grid-cols-1 lg:grid-cols-4 overflow-hidden" data-scale={2} data-max={100}>
		<Card extraClasses="relative " colSize={'col-span-4'} isOverflowHidden={true}>
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="/assets/images/about/falcon.webp"
				scaleOnHover={false}
			/>
		</Card>
	</div>

	<div class="  absolute h-full w-full  bg-dark-trans-lr ">
		<div
			class="bg-grid-dot h-full grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8  px-2 container"
		>
			<div />
			<div />
			<Card extraClasses="h-full text-right justify-center  gap-8  px-8 slide-in-right-slow" hasShadow={true} isRounded={false}>
				<div class="">
					<p class="text-decor">991514</p>
					<p class="text-subtitle text-white">PORTFOLIO</p>
					<Underline color="bg-white ml-auto" />
					<p class="text-title my-2 text-white">Alex Canales</p>

					<p>Full Stack Developer</p>
				</div>

				<div class="ml-auto">
					<NavbarArrow url={'#projects'} />
				</div>
			</Card>
		</div>
	</div>
</section>
