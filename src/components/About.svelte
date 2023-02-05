<script lang="ts">
	import { getDevicon } from '../utils/devicon-icons';
	import Card from '../widgets/card/Card.svelte';

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
	<Card colSize={'col-span-1'}>
		<img
			height="100"
			width="auto"
			class="object-none object-center card card-2xl"
			src="https://torontolife.com/wp-content/uploads/2018/02/Coutts-7.png"
			alt="Logo"
		/>
	</Card>

	<div class="col-span-1 px-4 md:px-16 lg:px-16 flex flex-col justify-even ">
		<h2 class="text-4xl  mb-4">About Me</h2>
		<hr class="bg-primary my-4 w-16 h-2 rounded-lg" />

		<p class="my-4 lg:w-[32rem]">
			Deserunt laborum sint non reprehenderit tempor ad aute sit duis labore anim nisi voluptate
			sint. Est eiusmod aute velit cupidatat elit eiusmod exercitation ad. Sunt commodo cupidatat
			duis pariatur est elit quis ad dolore ex non. Dolor cupidatat ad nostrud eiusmod ad excepteur
			veniam amet proident aute occaecat ipsum commodo. Ut voluptate ullamco aliqua consectetur id.
			Irure consectetur minim deserunt eu aliquip mollit enim ullamco exercitation consequat velit
			adipisicing mollit do. Duis esse exercitation cillum cillum. Excepteur minim quis
			reprehenderit labore est velit dolor qui qui.
		</p>

		<p class="font-bold mt-4">Favorite Tools:</p>

		<div class="flex flex-wrap  ">
			{#each icons as icon}
				<img
					height="100"
					width="auto"
					title={icon}
					class={`img-icon img-icon-color w-8 mx-2 py-2`}
					alt=""
					src={getDevicon(icon)}
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</div>
