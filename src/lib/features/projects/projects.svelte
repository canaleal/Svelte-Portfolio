<script lang="ts">
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import Card from './projectsCard.svelte'
  import { PROJECTS } from './constants/index'
  import DecorationBar from '$lib/components/elements/decorationBar.svelte'
</script>

<section id="Projects" class="flex flex-col gap-16 relative">
  
  <DecorationBar title="Projects" />

  <h2 class="text-lg font-semibold uppercase text-white">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <Card {project} />
  {/each}
  <a href="/projects" title="projects" class={LINK_ICON_BUTTON_STYLE.base}>
    <i class="fa-solid fa-arrow-right" />
    <p>View All Projects</p>
  </a>
</section>
