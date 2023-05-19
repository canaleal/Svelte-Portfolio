<script lang="ts">
	import { ABOUT_ICONS, WORK_EXPERIENCE } from '$lib/constants';
	import Icons from '$lib/widgets/Icons.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
</script>

<div class="flex flex-col h-full">
	<div class="flex-auto px-8 py-4">
		<h1>Alex Canales</h1>

		<div class="py-4"><Underline /></div>

		<p>
			Hey there! I'm a full-stack developer who's into building software applications from start to
			finish. But my real passion is all things machine learning and data science. I love learning
			about the latest advancements and experimenting with new tools and techniques.
		</p>
	</div>

	<div class="bg-dark py-4 px-8 mt-auto">
		<Icons
			icons={WORK_EXPERIENCE.map((exp) => exp.imageUrl)}
			hasIconColor={true}
			isDevicon={false}
		/>
	</div>
</div>
