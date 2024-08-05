<script lang="ts">

  import { PROJECTS } from './constants/index'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import ProjectAwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectLink from './widgets/projectLink.svelte'
  import { projectStore } from './store/projectStore'
  import type { IProject } from './types'

  const selectProject = (project: IProject) => {
    projectStore.setSelectedProject(project)
  }
</script>

<section id="Projects" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <div class="card ">
      <div class="flex-1 hidden md:flex ">
        <img
          src={project.image}
          on:click={() => selectProject(project)}
          on:keydown={() => {}}
          alt={project.title}
          class="card__image"
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
  {/each}
</section>

<style lang="postcss">
  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-300 rounded-sm hover:shadow-md transition-all duration-300;
  }

  .card__image {
    @apply w-[11rem] h-[7rem] bg-dark-900 object-cover transition-all duration-300 shadow-md rounded-lg;
  }

  .card__image:hover {
    @apply cursor-pointer shadow-lg;
  }
</style>
