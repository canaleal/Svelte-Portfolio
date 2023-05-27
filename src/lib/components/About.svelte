<script lang="ts">
	import { SKILLS, WORK_EXPERIENCE } from '$lib/constants';
	import Icons from '$lib/widgets/Icons.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<div class="flex flex-col h-full py-16">
	<div class="flex flex-col text-center">
		<h1>Alex Canales</h1>

		<h1>Software Developer</h1>
	</div>

	<div class="flex flex-col lg:flex-row py-16">
		<div class="flex-1 flex flex-col justify-between text-left">
			<div>
				<h3>About Me</h3>
				<div class="py-4"><Underline /></div>
				<p class="w-64">
					Fullstack software developer that also works with Machine Learning and Data Science.
				</p>
			</div>
			<div>
				<h3>Contact</h3>
				
				<p>Toronto, Canada</p>
				<a href="https://www.linkedin.com/in/alex-canales/" target="_blank" rel="noreferrer">LinkedIn</a>
				<p>alexcanales@gmail.com</p>
			
			</div>
			<div>
				<h3>Work Experience</h3>
				<ListView items={WORK_EXPERIENCE.map((exp) => exp.company)} listType=""/>
			</div>
		</div>
		<div class="flex-1">
			<Image hasColor={true} imageSize="img-card-3xl" isRounded={true}
				imageUrl="/assets/images/About.webp"
			/>

			
		</div>
		<div class="flex-1 flex flex-col justify-between lg:text-right">
			<div>
				<h3>Skills</h3>
				<ListView items={SKILLS} listType=""/>
				
			</div>
			<div>
				<h3>Education</h3>
				<p>Sheridan College</p>
				<p>Computer Science</p>
				<p>2018-2022</p>
			</div>
			<div>
				<h3>Interests</h3>
				<p>Embedded Systems</p>
				<p>GIS Mapping</p>
				<p>3D-Printing</p>
			</div>
			
		</div>
	</div>
</div>
