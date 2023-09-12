<script lang="ts">
	import { ABOUT_LIST, APPLICATION_LIST } from '$lib/constants/footer';
	import { PROJECTS } from '$lib/features/project/data/projects';
</script>

<footer class="z-50 bg-dark  shadow-lg py-16">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-2 container  ">
		<div class="col-span-1 ">
			<p class="text-white text-subtitle">Alex Canales</p>

			<p class="mt-2">alexcanales766@gmail.com</p>

			<div class="flex flex-row gap-2 mt-8">
				{#each ABOUT_LIST as item (item.id)}
					<a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
						<i class={item.icon + ' fa-lg footer-icon'} />
					</a>
				{/each}
			</div>

			<div class="flex flex-row gap-2 mt-8">
				<div class="w-4 h-4 bg-primary" />
				<div class="w-4 h-4 bg-purple-500" />
				<div class="w-4 h-4 bg-green-500" />
				<div class="w-4 h-4 bg-yellow-500" />
				<div class="w-4 h-4 bg-red-500" />
			</div>
		</div>

		<div class="col-span-1">
			<p class="text-subtitle">Projects</p>
			<div class="w-fit mt-2">
				{#each PROJECTS as projectElement}
					<a
						href={projectElement.showMoreUrl ?? `/projects/${projectElement.title}`}
						rel="noreferrer"
						aria-label={projectElement.title}
					>
						<p class="hover:text-white">{projectElement.title}</p>
					</a>
				{/each}
			</div>
		</div>

		<div class="col-span-1 ">
			<p class="text-subtitle">Tools</p>

			<div class="w-fit mt-2">
				{#each APPLICATION_LIST as item}
					<a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
						<p class="hover:text-white">{item.name}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
