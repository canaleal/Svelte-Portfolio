<script lang="ts">
	import { projectStore } from '$lib/features/projects/store/projectStore';
	import type { IProject } from '$lib/features/projects/types';

	let project: IProject | undefined;
	projectStore.subscribe((value) => {
		project = value.selectedProject;
	});

	let images: string[] = [];
	let selectedProjectIndex = 0;
	const setupImages = () => {
		if (!project) return;
		images = [project?.image, ...(project.extraImages ?? [])];
		selectedProjectIndex = 0;
	};

	const nextImage = () => {
		if (selectedProjectIndex === images.length - 1) return;
		selectedProjectIndex++;
	};

	const previousImage = () => {
		if (selectedProjectIndex === 0) return;
		selectedProjectIndex--;
	};

	$: project && setupImages();

	const close = () => {
		projectStore.clearSelectedProject();
	};
</script>

{#if project}
	<section class="fixed z-40 h-screen w-screen flex">
		<div
			class="absolute top-0 left-0 bg-black bg-opacity-90 h-screen w-screen"
		/>

		<div class="absolute top-10 right-10">
			<button class=" text-white hover:text-teal-300 p-2" on:click={()=>{close()}}>
				<span class="fa fa-x text-3xl"></span>
			</button>
		</div>

		<div class="my-auto mx-auto z-50 flex flex-row gap-4">
			<button class={`${selectedProjectIndex == 0 ? "text-zinc-600": "text-white"} w-fit h-fit my-auto p-4`} on:click={previousImage} on:keydown={() => {}}>
				<span class="fa fa-chevron-left text-xl" />
			</button>
			{#if images[selectedProjectIndex].includes('.mp4')}
				<video
					src={images[selectedProjectIndex]}
					class="rounded-lg w-[52rem] h-auto object-cover border border-zinc-600"
					controls
					autoplay
					muted
					loop
				/>
			{:else}
				<img
					src={images[selectedProjectIndex]}
					alt={project.title}
					class="rounded-lg w-[52rem] h-auto object-cover border border-zinc-600"
					loading="lazy"
					width="200"
					height="48"
					decoding="async"
				/>
			{/if}
			<button class={`${selectedProjectIndex == images.length-1 ? "text-zinc-600": "text-white"} w-fit h-fit my-auto p-4`} on:click={nextImage} on:keydown={() => {}}>
				<span class="fa fa-chevron-right text-xl" />
			</button>
		</div>
	</section>
{/if}
