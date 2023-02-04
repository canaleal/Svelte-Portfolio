<script lang="ts">
	import { getDevicon } from '../utils/devicon-icons';

	const icons = [
		'python',
		'svelte',
		'nodejs',
		'express',
		'fastapi',
		'mongodb',
		'postgresql',
		'docker',
		'googlecloud'
	];
</script>

<div
	id="about"
	class="grid  grid-cols-1 md:grid-cols-2 overflow-hidden  gap-4  py-16 px-4 md:px-32 lg:px-32"
>
	<div class="col-span-1">
		<img
			height="100"
			width="auto"
			class="object-none object-center card card-2xl"
			src="/assets/images/nature.webp"
			alt="Logo"
		/>
	</div>

	<div class="col-span-1 px-4 md:px-16 lg:px-16 flex flex-col justify-even">
		<h2 class="text-4xl  mb-4">About Me</h2>
		<hr class="bg-primary my-4 w-16 h-2 rounded-lg" />

		<p class="my-4 lg:w-[32rem]">
			Software developer based in Oakville, Ontario interested in Predictive Image Analysis (Object
			Detection) and Data Science. Although I spend most of my days programming or working with
			computers, I enjoy economics and finance and learning more about how the world works. On my
			free time, I like reading up on financial reports (I know, it sounds boring) , investing, and
			creating programs that help me manage my money.
		</p>

		<p class="font-bold ">Favorite Tools:</p>

		<div class="flex flex-wrap  ">
			{#each icons as icon}
				<img
					height="100"
					width="auto"
					title={icon}
					class={`img-icon w-8 mx-2 py-2`}
					alt=""
					src={getDevicon(icon)}
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</div>
