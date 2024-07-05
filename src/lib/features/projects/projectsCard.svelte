<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import type { IProject } from './types'
  import { projectStore } from './store/projectStore'
  import ProjectAwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectLink from './widgets/projectLink.svelte'

  export let project: IProject
  const selectProject = () => {
    projectStore.setSelectedProject(project)
  }
</script>

<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 hidden md:flex" on:click={selectProject} on:keydown={() => {}}>
    <img
      src={project.image}
      alt={project.title}
      class=" w-[11rem] h-[7rem] bg-dark-900 object-cover shadow-md  hover:cursor-pointer border transition-all duration-300 hover:scale-105"
      loading="lazy"
      width="200"
      height="48"
      decoding="async"
    />
  </div>

  <div class="flex-4 flex flex-col">
    
    <ProjectLink {project} />
    <ProjectAwardsBar {project} extraClasses="mt-2" />
    <p class="mt-2">{project.description}</p>
    <TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
  </div>
</div>
