<script lang="ts">
	import { page } from '$app/stores';
	import { NAVBAR_ELEMENTS } from '$lib/constants';
</script>

<nav class="nav z-20 bg-dark shadow-lg">
	{#each NAVBAR_ELEMENTS as navMenu}
		<a href={navMenu.url} class="nav-item" aria-label={navMenu.name}>
			<div class={`nav-link ${navMenu.url == $page.url.pathname ? 'nav-link-selected' : ''}`}>
				<i class={`fa-2x ${navMenu.icon}  `} aria-hidden="true" />
				<span class="link-text">{navMenu.name}</span>
			</div>
		</a>
	{/each}
</nav>
