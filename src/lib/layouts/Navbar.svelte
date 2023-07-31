<script lang="ts">
	import { page } from '$app/stores';
	import { NAVBAR_ELEMENTS } from '$lib/constants';
</script>

<nav class="nav bg-dark-trans shadow-lg ">
	{#each NAVBAR_ELEMENTS as navMenu}
		<a
			href={navMenu.url}
			class={`nav-button ${navMenu.url == $page.url.pathname ? 'nav-button-selected' : ''}`}
			aria-label={navMenu.name}
		>
			<i class={`link-icon mr-2 fa-lg ${navMenu.icon}  `} aria-hidden="true" />
			<span class="link-text">{navMenu.name}</span>
		</a>
	{/each}
</nav>
