<script lang="ts">
	import { NAVBAR_ELEMENTS } from '$lib/constants';
	import { onMount } from 'svelte';

	let isHidden = false;
	let lastScrollPosition = 0;

	onMount(() => {
		window.addEventListener('scroll', () => {
			const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
			if (currentScrollPosition > lastScrollPosition) {
				// Scrolling down
				isHidden = true;
			} else {
				// Scrolling up
				isHidden = false;
			}

			lastScrollPosition = currentScrollPosition;
		});
	});
</script>

<nav class="nav bg-dark-trans shadow-lg {isHidden ? 'nav-hidden' : ''}">
	{#each NAVBAR_ELEMENTS as navMenu}
		<a
			href={navMenu.url}
			class={`nav-button  ${navMenu.url == '/' ? 'nav-button-selected' : ''}`}
			aria-label={navMenu.name}
		>
			<i class={`link-icon mr-2 fa-lg ${navMenu.icon}  `} aria-hidden="true" />
			<span class="link-text">{navMenu.name}</span>
		</a>
	{/each}
</nav>
