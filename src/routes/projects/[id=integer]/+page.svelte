<script lang="ts">
	import type { projectType } from '../../../types/project-types';
	import { applicationFieldFontIcon } from '../../../types/project-types';
	import { getDevicon } from '../../../utils/devicon-icons';
	import AttentionBar from '../../../widgets/AttentionBar.svelte';
	import Card from '../../../widgets/card/Card.svelte';
	import SectionHeader from '../../../widgets/SectionHeader.svelte';
	export let data: any;
	let projectElement: projectType = data.projectElement;
</script>

<section
	id={projectElement.description}
	class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden "
>
	<Card colSize={'col-span-2'} isRounded={false} noHover={true}>
		<a
			href={projectElement.exampleUrl || projectElement.githubUrl}
			target="_blank"
			rel="noreferrer"
		>
			<img
				height="100"
				width="auto"
				src={`${projectElement.imageUrl}`}
				alt={`${projectElement.title}`}
				class="img-card img-card-4xl "
				loading="lazy"
			/>
		</a>
	</Card>

	<div class="col-span-2  py-8 px-4 md:px-16 lg:px-16 flex flex-col justify-even">
		<p class="text-xl font-bold ">{projectElement.title}</p>
		<hr class="bg-primary my-4 w-16 h-2 rounded-lg" />

		<p class="my-2 lg:w-[32rem]">{projectElement.description}</p>

		<hr class="my-4" />

		<div class="flex flex-row flex-wrap gap-8 md:gap-16 lg:gap-16">
			<div>
				<p class="text-lg font-bold">Size:</p>
				<p>{projectElement.size}</p>
			</div>

			<div>
				<p class="text-lg font-bold ">Author:</p>
				<p>{projectElement.author}</p>
			</div>

			<div>
				<p class="text-lg font-bold ">Project Type:</p>
				<p>
					<i
						class="{applicationFieldFontIcon[projectElement.applicationField]} mr-1"
					/>{projectElement.applicationField}
				</p>
			</div>

			<div>
				<p class="text-lg font-bold ">In Development:</p>
				<p>{projectElement.inDevelopment}</p>
			</div>
		</div>

		<hr class="my-4" />

		<div class="">
			<p class="font-bold mt-4">Tools:</p>
			<div class="flex flex-wrap ">
				{#each projectElement.tools as icon}
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

		<div class="flex flex-row gap-4 mt-8">
			{#if projectElement.githubUrl}
				<a
					href={projectElement.githubUrl}
					target="_blank"
					rel="noreferrer"
					class="card-btn card-btn-blue  rounded-lg"><i class="fa-solid fa-code mr-2" />Code</a
				>
			{/if}

			{#if projectElement.exampleUrl}
				<a
					href={projectElement.exampleUrl}
					target={projectElement.exampleUrl.includes('http') ? '_blank' : ''}
					rel="noreferrer"
					class="card-btn  rounded-lg"><i class="fa-solid fa-eye mr-2" />Demo</a
				>
			{/if}
		</div>
	</div>
</section>

<section
	id={projectElement.description}
	class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden bg-dark"
>
	{#each projectElement.optionalImageUrls as image, i}
		<Card
			colSize={projectElement.optionalImageUrls.length === 1
				? 'col-span-4'
				: projectElement.optionalImageUrls.length >= 3
				? 'col-span-1'
				: 'col-span-2'}
			isRounded={false}
			noHover={true}
			slideAnimation={'slide-in-right'}
			speed={i + 1 * 5}
		>
			<div>
				{#if image.endsWith('.mp4')}
					<video
						height="auto"
						width="100%"
						class={`object-cover card card-no-hover ${
							projectElement.optionalImageUrls.length === 1 ? 'card-4xl' : 'card-2xl'
						}`}
						controls
						autoplay
						loop
						muted
					>
						<source src={image} type="video/mp4" />
					</video>
				{:else}
					<img
						height="auto"
						width="100%"
						class={`object-cover card card-no-hover ${
							projectElement.optionalImageUrls.length === 1 ? 'card-4xl' : 'card-2xl'
						}`}
						src={image}
						alt="Logo"
					/>
				{/if}
			</div>
		</Card>
	{/each}
</section>
