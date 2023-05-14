<script lang="ts">
	import { ABOUT_ICONS, EDUCATION, WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/widgets/IconsBar.svelte';

</script>

<h2 class="text-4xl ">Alex Canales</h2>

<hr class="bg-primary my-4 w-16 h-2 rounded-lg" />

<p class="lg:w-[32rem]">
	Hi, I'm Alex, a software developer specializing in front end, with interest in backend and machine
	learning. Keen on keeping up with tech trends, I'm fascinated by the intersection of web
	development and machine learning. I'm eager to connect, grow, and explore new tech opportunities.
	Feel free to connect with me on LinkedIn or email for potential collaborations.
</p>

<p class="font-bold my-4">Favorite Tools:</p>

<div class=" bg-dark-light rounded-lg p-4 ">
	<IconsBar icons={ABOUT_ICONS} hasIconColor={true} isDevicon={true}/>
</div>

<p class="font-bold my-4">Work Experience:</p>

<div class=" bg-dark-light rounded-lg p-4 ">
	<IconsBar icons={WORK_EXPERIENCE.map((work) => work.imageUrl)} altTexts={WORK_EXPERIENCE.map((work) => work.company)} hasIconColor={true} />
</div>

<p class="font-bold my-4">Education and Certificates:</p>

<div class=" bg-dark-light rounded-lg p-4 ">
	<IconsBar icons={EDUCATION.map((ed) => ed.imageUrl)} altTexts={EDUCATION.map((ed) => ed.program)} hasIconColor={true} />
</div>