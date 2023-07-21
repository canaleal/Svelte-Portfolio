<script lang="ts">
	import { CONTACT_INFO, PROGRAMMING_LANGUAGES, SKILLS } from '$lib/constants';
	import IconsBar from '$lib/components/ui/IconsBar.svelte';
	import ListView from '$lib/components/ui/ListView.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import { onMount } from 'svelte';
	import Image from '$lib/components/ui/Image.svelte';

	let textRefs: any = [];

	onMount(() => {
		textRefs = document.querySelectorAll('.js-text');

		const observerText = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).style.opacity = '1';
					entry.target.classList.add('fade-in-fast');

					observerText.unobserve(entry.target);
				}
			});
		});

		textRefs.forEach((img: Element) => observerText.observe(img));
	});
</script>

<div class="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 overflow-hidden p-2 container">
	<div class="col-span-1 flex flex-col gap-4 js-text">
		<p class="text-title">About</p>

		<p class="w-5/6">
			Full-stack developer with a profound interest in Machine Learning and Data Science. Driven by
			curiosity, I am always exploring the latest advancements in AI, seeking out new tools and
			techniques that can refine my problem-solving skills.
		</p>

		<IconsBar icons={PROGRAMMING_LANGUAGES} isDevicon={true} iconSize={'w-6'} hasIconColor={true} />
	</div>

	<div class="col-span-1 flex flex-col justify-between gap-8 js-text">
		<div>
			<p class="text-subtitle">Skills</p>
			<Underline color={'bg-white'} isRounded={false} />

			<ListView items={SKILLS} />
		</div>

		<div>
			<p class="text-subtitle">Contact</p>
			<Underline color={'bg-white'} isRounded={false} />
			<ListView items={CONTACT_INFO} />
		</div>
	</div>

	<div class="col-span-1  " />
</div>
