<script>
	import { EDUCATION, SKILLS, WORK_EXPERIENCE } from '$lib/constants';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<div class="flex lg:flex-row flex-col py-24 gap-8 px-8 text-white">
	<div class="flex-1 flex flex-col justify-between gap-8">
		<div class="flex flex-col gap-8">
			<p class="text-title">About Me</p>

			<p class="w-64">
				Full-stack developer with a profound interest in Machine Learning and Data Science. Driven
				by curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
				techniques that can refine my problem-solving skills.
			</p>
		</div>
	</div>
	<div class="flex-1 flex flex-col justify-between gap-8">
		<div>
			<p class="text-subtitle">Work Experience</p>
            <Underline color={"bg-white"} isRounded={false}/>
			<div class="ml-2">
				{#each WORK_EXPERIENCE as work}
					<div class="flex flex-col gap-2">
						<p>{work.role} - {work.company}</p>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<p class="text-subtitle">Education</p>
            <Underline color={"bg-white"} isRounded={false}/>
			<div class="ml-2">
				{#each EDUCATION as edu}
					<div class="flex flex-col gap-2">
						<p>{edu.educationLevel} {edu.program} - {edu.school}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="flex-1 flex flex-col justify-between gap-8">
		<div>
			<p class="text-subtitle">Skills</p>
            <Underline color={"bg-white"} isRounded={false}/>
			<div class="ml-2">
				<ListView items={SKILLS} listType="" />
			</div>
		</div>

		<div>
			<p class="text-subtitle">Contact</p>
            <Underline color={"bg-white"} isRounded={false}/>
			<div class="ml-2">
				<p>Toronto, Canada</p>
				<p>https://www.linkedin.com/in/alex-canales/</p>
				<p>alexcanales766@gmail.com</p>
			</div>
		</div>
	</div>
</div>
