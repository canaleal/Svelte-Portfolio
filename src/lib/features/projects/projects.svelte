<script lang="ts">
  import { PROJECTS } from './constants/index'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import ProjectAwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectLink from './widgets/projectLink.svelte'
  import { projectStore } from './store/projectStore'
  import type { IProject } from './types'
  import '$lib/components/elements/card/style/style.css'
  import Card from '$lib/components/elements/card/card.svelte'

  const selectProject = (project: IProject) => {
    projectStore.setSelectedProject(project)
  }
</script>

<section id="Projects" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <Card>
      <div slot="left">
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

      <div slot="right">
        <ProjectLink {project} />
        <ProjectAwardsBar {project} extraClasses="mt-2" />
        <p class="mt-2">{project.description}</p>
        <TechnologiesBar technologies={project.technologies} extraClasses="mt-4" />
      </div>
    </Card>
  {/each}
</section>
