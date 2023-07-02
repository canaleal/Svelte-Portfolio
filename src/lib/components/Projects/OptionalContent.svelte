<script lang="ts">
	import type { IOptionalContent } from '$lib/types/project-types';
	import Button from '$lib/widgets/Button.svelte';
	import CodeJson from '$lib/widgets/CodeJSON.svelte';
	import IconsBar from '$lib/widgets/IconsBar.svelte';
	import Image from '$lib/widgets/Image.svelte';
	import ListView from '$lib/widgets/ListView.svelte';
	import Underline from '$lib/widgets/Underline.svelte';
	import Card from '$lib/widgets/card/Card.svelte';
	import { onMount } from 'svelte';
	import Content from '../Cars/Content.svelte';
	export let optionalContent: IOptionalContent;

	let translateDivs: NodeListOf<Element> | Element[] = [];

	onMount(() => {
		translateDivs = document.querySelectorAll('.trans');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					window.addEventListener('scroll', function () {
						let el = entry.target as HTMLElement;
						let scale = parseInt(el.dataset.scale || '2');
						let direction = parseInt(el.dataset.direction || '1');
						let max = parseInt(el.dataset.max || '300');
						let translateValue =
							Math.min(max, (window.scrollY / window.innerHeight) * 30 * scale) * direction;

						el.style.transform = `translate3d(0px, ${translateValue}px, 0px)`;
					});
				}
			});
		});

		translateDivs.forEach((img: Element) => observer.observe(img));
	});
</script>

<div class="container grid  grid-cols-1   lg:grid-cols-{optionalContent.colSpan || 3} gap-8  py-10 px-8">
	{#each optionalContent.colContent as colContent, i}
		{#if colContent.imageUrl}
			<div class="{colContent.hasTrans ? "trans" : ""} relative card col-span-{colContent.colSpan}" data-scale={i + 1}>
				<Image
					imageUrl={colContent.imageUrl}
					imageAlt={colContent.title}
					imageSize={colContent.imageSize || 'img-card-md'}
				/>
				<div class="overlay overlay-rounded p-2 ">
					<a class="p-2" href={colContent.imageUrl} target="_blank" rel="noreferrer" >Source</a>
				</div>
			</div>
		{:else}
			<div class="{colContent.hasTrans ? "trans" : ""} flex flex-col card col-span-{colContent.colSpan}" data-scale={i + 1}>
				{#if colContent.title}
					<div class="flex flex-col px-8 py-4">
						<p class="text-subtitle ">{colContent.title}</p>
						<Underline isRounded={false} />

						{#if colContent.description}
							<p class="pr-8">
								{colContent.description}
							</p>
						{/if}
						{#if colContent.subtitle}
							<p class="text-subtitle">{colContent.subtitle}</p>
							<Underline isRounded={false} />
						{/if}
						{#if colContent.listItems}
							<ListView items={colContent.listItems} listType="list-disc" />
						{/if}
					</div>
				{/if}

				{#if colContent.linkButtons}
					<div class="flex flex-row gap-4 mt-auto  py-4 px-8">
						{#each colContent.linkButtons as linkButton}
							<Button
								url={linkButton.url}
								text={linkButton.title}
								icon={linkButton.icon}
								label={linkButton.title}
								bgColor="btn-primary"
							/>
						{/each}
					</div>
				{/if}

				{#if colContent.tools}
					<div class="mt-auto bg-smoke  py-4 px-8">
						<IconsBar
							icons={colContent.tools}
							isDevicon={true}
							iconSize={'w-6'}
							hasIconColor={true}
						/>
					</div>
				{/if}

				{#if colContent.isCodeJson}
					<CodeJson codeTheme={colContent.codeJsonTheme} />
				{/if}
			</div>
		{/if}
	{/each}
</div>
