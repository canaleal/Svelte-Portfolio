<script lang="ts">
	import { ABOUT_ICONS, WORK_EXPERIENCE } from '$lib/constants';
	import IconsBar from '$lib/widgets/Icons.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<div class="flex flex-col">
	<h2 class="text-4xl ">Alex Canales</h2>

	<div class="py-4"><Underline /></div>
	
	<p>
		Hi, I'm Alex, a software developer specializing in front end, with interest in backend and
		machine learning. Keen on keeping up with tech trends, I'm fascinated by the intersection of web
		development and machine learning. I'm eager to connect, grow, and explore new tech
		opportunities. Feel free to connect with me on LinkedIn or email for potential collaborations.
	</p>

	<p class="font-bold my-4">Favorite Tools:</p>

	<div class=" bg-dark-light rounded-lg p-4 ">
		<IconsBar icons={ABOUT_ICONS} hasIconColor={true} isDevicon={true} />
	</div>

	<p class="font-bold my-4">Work Experience:</p>

	<div class=" bg-dark-light rounded-lg p-4 ">
		<IconsBar
			icons={WORK_EXPERIENCE.map((work) => work.imageUrl)}
			altTexts={WORK_EXPERIENCE.map((work) => work.company)}
			hasIconColor={true}
		/>
	</div>
</div>
