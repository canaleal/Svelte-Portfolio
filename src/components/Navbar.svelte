<script lang="ts">
  import { page } from '$app/stores';

	let navMenus = [
		{ name: 'Portfolio', icon: 'fa fa-circle', link: '/' },
		{ name: 'Projects', icon: 'fa fa-code', link: '/projects' },
		{ name: 'Templates', icon: 'fa fa-fire', link: '/templates' },
		{ name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/canaleal' },
		{ name: 'Bitbucket', icon: 'fa-brands fa-bitbucket', link: 'https://bitbucket.org/canaleal/' },
		{ name: 'LinkedIn', icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/canaleal/' }
	];
</script>

<nav class="nav z-20 bg-dark">

  {#each navMenus as navMenu}
    <a
      href={navMenu.link}
      class="nav-item"
      aria-label={navMenu.name}
    >
      <div class={`nav-link ${$page.url.pathname.endsWith(navMenu.link) ? 'nav-link-selected': 'text-white'}`}>
        <i class={`fa-2x ${navMenu.icon}  `} aria-hidden="true" />
        <span class="link-text">{navMenu.name}</span>
      </div>
    </a>
  {/each}

</nav>
