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

<div class="flex flex-col md:flex-row gap-4 ">
  <div class="flex-1 hidden md:flex group" on:click={selectProject} on:keydown={() => {}}>
    <img
      src={project.image}
      alt={project.title}
      class="card"
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

<style lang="postcss">
.card {
  @apply w-[11rem] h-[7rem] bg-dark-900 object-cover border transition-all duration-300;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 18px 0 rgba(0, 0, 0, 0.08);
}

.card:hover {
  @apply hover:cursor-pointer;
  box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.15), 0 8px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 25px 0 rgba(0, 0, 0, 0.15);
}
</style>
