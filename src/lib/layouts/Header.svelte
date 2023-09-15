<script lang="ts">
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import { flip } from 'svelte/animate';
	let items = ['bg-primary', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];

	function shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	setInterval(() => {
		setTimeout(() => {
			items = shuffleArray([...items]);
		}, 500);
	}, 2000);
</script>

<section id="hero" class="relative overflow-hidden py-64  bg-dark">
	<div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  p-2 container  ">
		<div class="flex flex-col  w-full hidden-animation hidden-animation-left">
			<p class="text-title ">Alex Canales</p>

			<p class="mt-4 w-1/2">Full Stack Developer</p>
			<div class="flex flex-row mt-8">
				<NavbarArrow url="#about" />
			</div>
		</div>

		<div class="flex flex-col gap-2 w-full hidden-animation hidden-animation-right">
			{#each items as item (item)}
				<div
					animate:flip={{ duration: 1000 }}
					class="ml-auto w-4 h-4 transition-all duration-1000 {item} "
				/>
			{/each}
		</div>
	</div>
</section>
