<script lang="ts">
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Grid from './Grid.svelte';

	import {flip} from 'svelte/animate';
	let items = ['bg-primary', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];

	function shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	let expand = false;

	// Rearrange divs every 2 seconds
	setInterval(() => {
		expand = true;
		setTimeout(() => {
			items = shuffleArray([...items]);
			expand = false;
		}, 500);
	}, 2000);
</script>

<section id="hero" class="relative overflow-hidden py-64  bg-dark">
	<Grid lgGridColSpan={2}>
		<div class="flex flex-col container w-full hidden-animation hidden-animation-left">
			<p class="text-title ">Alex Canales</p>

			<p class="mt-4 w-1/2">Full Stack Developer</p>
			<div class="flex flex-row mt-8">
				<NavbarArrow url="#about" />
			</div>
		</div>

		<div class="flex flex-col gap-2 w-full transition-all duration-500">
			{#each items as item (item)}
				<div
					animate:flip={{ duration: 1000}}
					class="ml-auto w-4 h-4 transition-all duration-1000 {item} "
				/>
			{/each}
		</div>
	</Grid>
</section>
