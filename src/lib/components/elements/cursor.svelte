<!-- App.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {

        // Get all cursor-hover-trigger elements
        const cursorHoverTriggers = document.querySelectorAll('.cursor-hover-trigger');

        // Add mouseenter event listener to each cursor-hover-trigger element
        cursorHoverTriggers.forEach((trigger) => {
            trigger.addEventListener('mouseenter', () => {
                const cursor = document.querySelector('.cursor');
                if (cursor) cursor.classList.add('cursor-hover');
            });

			// Add mouseleave event listener to each cursor-hover-trigger element
			trigger.addEventListener('mouseleave', () => {
				const cursor = document.querySelector('.cursor');
				if (cursor) cursor.classList.remove('cursor-hover');
			});
        });

		function handleMouseMove(event: { clientX: number; clientY: number }) {
			mouseX = event.clientX;
			mouseY = event.clientY;
		}

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>


<div class="cursor" style="left: {mouseX}px; top: {mouseY}px;" />
