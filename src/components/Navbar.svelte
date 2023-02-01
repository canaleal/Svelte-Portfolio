<script lang="ts">
	import { page } from '$app/stores';

	let navMenus = [
		{ name: 'Canales', icon: 'fa fa-diamond', link: '/' },
		{ name: 'Projects', icon: 'fa-solid fa-code-branch', link: '/projects' },
		{ name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/canaleal' },
		{ name: 'Bitbucket', icon: 'fa-brands fa-bitbucket', link: 'https://bitbucket.org/canaleal/' },
		{
			name: 'LinkedIn',
			icon: 'fa-brands fa-linkedin',
			link: 'https://www.linkedin.com/in/alex-canales/'
		},

		{ name: 'Tools', icon: 'fa fa-gear', link: '/tools' }
	];
</script>

<nav class="nav z-20 bg-dark">
	{#each navMenus as navMenu}
		<a href={navMenu.link} class="nav-item" aria-label={navMenu.name}>
			<div
				class={`nav-link ${
					navMenu.link == $page.url.pathname ||
					($page.url.pathname.includes(navMenu.link) && navMenu.link != '/')
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
