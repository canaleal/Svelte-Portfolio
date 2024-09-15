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

<div class="project-icon-container {extraClasses}">
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
    @apply flex flex-row  flex-wrap;
  
  }

  .project-icon-button {
    @apply p-2 hover:text-frog-800 text-xl transition-all;
  }
</style>
