<script context="module" lang="ts">
	export const positions = {
		topLeft: 'top-8 left-8',
		topRight: 'top-8 right-8',
		bottomLeft: 'bottom-8 left-8',
		bottomRight: 'bottom-8 right-8'
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let position: keyof typeof positions;
	let visible = false;

	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop;
		console.log(scrolled);
		visible = scrolled > 300;
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<button
	on:click={scrollToTop}
	class={`fixed ${
		positions[position]
	} bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-md z-50 ${
		visible ? 'visible' : 'invisible'
	}`}
>
	<i class="fa fa-arrow-up" aria-hidden="true" />
</button>
