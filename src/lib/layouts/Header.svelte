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

<section class="flex flex-col h-full container">
	<div
		class="trans grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-hidden"
		data-scale={2}
		data-max={100}
	>
		<Card extraClasses="relative slide-in-left-slow" colSize={'col-span-2'} isOverflowHidden={true}>
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="/assets/images/about/space_2.webp"
			/>
		</Card>

		<Card extraClasses="relative slide-in-left-slow" colSize={'col-span-1'} isOverflowHidden={true}>
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="/assets/images/about/space_3.webp"
			/>
		</Card>

		<Card extraClasses="relative slide-in-right-slow" colSize={'col-span-1'} isOverflowHidden={true}>
			<Image
				imageSize="img-card-xl   "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_nature.webp"
			/>

			<div
				class=" bg-dark-trans absolute top-0 right-0  h-full w-full text-right flex flex-col justify-center  gap-8 p-8"
			>
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
		</Card>
	</div>
</section>
