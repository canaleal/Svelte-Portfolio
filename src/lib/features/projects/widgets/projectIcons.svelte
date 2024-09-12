<script lang="ts">
  import '$lib/components/elements/link/style/style.css'
  import { getProjectLinks } from '../utils/projectLinks'
  import type { IIconValueComponent, IProject } from '../types'
  import { projectStore } from '../store/projectStore'

  export let project: IProject
  export let extraClasses: string = ''
  const projectLinks: IIconValueComponent[] = getProjectLinks(project)

  const selectProject = (project: IProject) => {
    projectStore.setSelectedProject(project)
  }
</script>

<div class="project-icon-container group-hover:translate-x-0   {extraClasses}">
  {#each projectLinks as link}
    <a href={link.link ?? ''} target="_blank" rel="noreferrer" title={link.title} class="project-icon-button">
      <i class={link.icon} />
    </a>
  {/each}

  <button class="project-icon-button" on:click={() => selectProject(project)}>
    <i class="fa fa-info-circle" />
  </button>
</div>

<style lang="postcss">
  .project-icon-container {
    @apply flex flex-row gap-2 flex-wrap;
    @apply  lg:translate-x-full lg:pl-8 lg:transition-transform lg:duration-300;
  }

  .project-icon-button {
    @apply p-2 hover:text-frog-800 text-2xl transition-all;
  }
</style>
