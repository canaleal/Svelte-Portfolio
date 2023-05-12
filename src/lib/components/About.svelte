<script lang="ts">
	import { ABOUT_ICONS } from "$lib/constants";
	import { getDevicon } from "$lib/utils/devicon-icons";

    </script>

<h2 class="text-4xl ">Alex Canales</h2>
	
			<hr class="bg-primary my-4 w-16 h-2 rounded-lg" />

			<p class="lg:w-[32rem]">
				Hi, I'm Alex, a software developer specializing in front end, with interest in backend and
				machine learning. Keen on keeping up with tech trends, I'm fascinated by the intersection of
				web development and machine learning. I'm eager to connect, grow, and explore new tech
				opportunities. Feel free to connect with me on LinkedIn or email for potential
				collaborations.
			</p>

			<p class="font-bold my-4">Favorite Tools:</p>

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