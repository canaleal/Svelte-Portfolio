<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import type { IProject } from '../types'
  import { projectStore } from '../store/projectStore'
  import ProjectAwardsBar from './projectAwardsBar.svelte'
  import ProjectLink from './projectLink.svelte'

  export let project: IProject
  const selectProject = () => {
    projectStore.setSelectedProject(project)
  }
</script>

<div class="card ">
  <div class="flex-1 hidden md:flex " on:click={selectProject} on:keydown={() => {}}>
    <img src={project.image} alt={project.title} class="card__image" loading="lazy" width="200" height="48" decoding="async" />
  </div>

  <div class="flex-4 flex flex-col">
    <ProjectLink {project} />
    <ProjectAwardsBar {project} extraClasses="mt-2" />
    <p class="mt-2">{project.description}</p>
    <TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
  </div>
</div>

<style lang="postcss">

  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-100 rounded-lg hover:shadow-md transition-all duration-300;
  }

  .card__image {
    @apply w-[11rem] h-[7rem] bg-dark-900 object-cover border transition-all duration-300 shadow-md;
  }

  .card__image:hover {
    @apply cursor-pointer shadow-lg scale-105;
  }
</style>
