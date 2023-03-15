<script lang="ts">
	import { getDevicon } from '$lib/utils/devicon-icons';
	import Card from '$lib/widgets/card/Card.svelte';
	import { ABOUT_ICONS } from '$lib/constants';
	
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
			Hi there! My name is Alex and I am a software developer with a focus on front end development.
			However, I am also passionate about backend development and machine learning. Outside of my
			professional experience, I am constantly seeking out new learning opportunities and staying
			up-to-date on the latest developments in the tech industry. I am particularly interested in
			the intersection of machine learning and web development, and am always looking for ways to
			incorporate these technologies into my work. I am excited to connect with others in the tech
			community and explore new opportunities to grow and learn as a developer. Feel free to reach
			out to me on LinkedIn or send me an email to if you would like to connect or discuss potential
			collaboration.
		</p>

		<p class="font-bold mt-4">Favorite Tools:</p>

		<div class="flex flex-wrap  ">
			{#each ABOUT_ICONS as icon}
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
