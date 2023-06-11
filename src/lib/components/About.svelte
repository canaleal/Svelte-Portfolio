<script lang="ts">
	import { EDUCATION, PROGRAMMING_LANGUAGES, SKILLS, WORK_EXPERIENCE } from '$lib/constants';
	import Icons from '$lib/widgets/Icons.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';

	//Get images from WORK_EXPERIENCE
	const images = WORK_EXPERIENCE.map((item) => item.imageUrl);
</script>

<div class="flex flex-col h-full px-8 py-8 container">
	<div class="flex flex-col ">
		<div class="flex flex-col lg:flex-row gap-8">
			
				<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="/assets/images/About.webp"
			/>


			<Image
				imageSize="img-card-xl  "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_trail.webp"
			/>
			<Image
				imageSize="img-card-xl "
				isRounded={false}
				imageUrl="/assets/images/Header.webp"
			/>

			<Image
				imageSize="img-card-xl  "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_nature.webp"
			/>
			
			
		</div>

		<div class="flex flex-col  text-right lg:mt-8">
			<div>
				<p class="text-subtitle">PORTFOLIO</p>
				<p class="text-title my-2">Alex Canales</p>

				<p>Full Stack Software Developer</p>
			</div>
		</div>
	</div>

	
</div>
