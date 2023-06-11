<script lang="ts">
	import { EDUCATION, SKILLS, WORK_EXPERIENCE } from '$lib/constants';
	import Icons from '$lib/widgets/Icons.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<div class="flex flex-col h-full px-8  container">
	<div class="flex flex-col ">
		<div class="flex flex-col lg:flex-row gap-8 ">
			<Image imageSize="img-card-2xl slide-in-left-slow" isRounded={false} imageUrl="/assets/images/About.webp" />
			<Image
				imageSize="img-card-2xl slide-in-bottom-slow "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_trail.webp"
			/>
			<Image imageSize="img-card-2xl slide-in-top-slow" isRounded={false} imageUrl="/assets/images/Header.webp" />
			
			<Image
				imageSize="img-card-2xl slide-in-right-slow "
				isRounded={false}
				imageUrl="/assets/images/projects/portfolio_nature.webp"
			/>
		</div>

		<div class="flex flex-col  text-right mt-8">
			<div>
				<p class="text-subtitle">PORTFOLIO</p>
				<h3>Alex Canales</h3>

				<p>Software Developer</p>
			</div>
		</div>
	</div>

	<div class="flex lg:flex-row flex-col mt-8 gap-8">
		<div class="flex-1 flex flex-col justify-between gap-8">
			<div>
				<p class="text-subtitle">About Me</p>

				<p class="w-64">
					Full-stack developer with a profound interest in Machine Learning and Data Science. Driven by curiosity, I am always exploring the latest advancements in AI, seeking out new tools and techniques that can refine my problem-solving skills.
				</p>
			</div>
			<div>
				<p class="text-subtitle">Contact</p>

				<p>Toronto, Canada</p>
				<p 
					>https://www.linkedin.com/in/alex-canales/</p
				>
				<p>alexcanales@gmail.com</p>
			</div>
			
		</div>
		<div class="flex-1 flex flex-col justify-between gap-8">
			<div>
				<p class="text-subtitle">Work Experience</p>
			
					{#each WORK_EXPERIENCE as work}
					<div class="flex flex-col gap-2">
						<p>{work.role} - {work.company}</p>
					
					</div>
				{/each}
			</div>

			<div>
				<p class="text-subtitle">Education</p>
				{#each EDUCATION as edu}
					<div class="flex flex-col gap-2">
						<p>{edu.educationLevel} {edu.program} - {edu.school}</p>
						
					</div>
				{/each}
			
			</div>
		</div>

		<div class="flex-1 flex flex-col justify-between gap-8">
			<div>
				<p class="text-subtitle">Skills</p>
				<ListView items={SKILLS} listType="" />
			</div>
			
			<div>
				<p class="text-subtitle">Interests</p>
				<p>Embedded Systems</p>
				<p>GIS Mapping</p>
				<p>3D-Printing</p>
			</div>
		</div>
	</div>
</div>
