<script lang="ts">
	import { page } from '$app/stores';
	import type { INavbarElementType } from '$lib/types/navbar-types';

	const NAVBAR_ELEMENTS: INavbarElementType[] = [
		{ id: 0, name: 'Canales', icon: 'fa fa-diamond', url: '/' },
		{ id: 1, name: 'Projects', icon: 'fa-solid fa-code-branch', url: '/#projects' },
		{ id: 2, name: 'Github', icon: 'fa-brands fa-github', url: 'https://github.com/canaleal' },
		{
			id: 3,
			name: 'Bitbucket',
			icon: 'fa-brands fa-bitbucket',
			url: 'https://bitbucket.org/canaleal/'
		},
		{
			id: 4,
			name: 'LinkedIn',
			icon: 'fa-brands fa-linkedin',
			url: 'https://www.linkedin.com/in/alex-canales/'
		}
	];
</script>

<nav class="nav z-20 bg-dark shadow-lg">
	{#each NAVBAR_ELEMENTS as navMenu}
		<a href={navMenu.url} class="nav-item" aria-label={navMenu.name}>
			<div
				class={`nav-link ${
					navMenu.url == $page.url.pathname ||
					($page.url.pathname.includes(navMenu.url) || $page.url.pathname.includes(navMenu.url))
						? 'nav-link-selected'
						: ''
				}`}
			>
				<i class={`fa-2x ${navMenu.icon}  `} aria-hidden="true" />
				<span class="link-text">{navMenu.name}</span>
			</div>
		</a>
	{/each}
</nav>
