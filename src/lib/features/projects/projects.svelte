<script lang="ts">
  import { PROJECTS } from './constants/index'
  import AwardsBar from '$lib/components/elements/awardsBar.svelte'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import { getProjectAwardElements, getProjectLinks } from './utils/projectUtils'
  import { projectStore } from './store/projectStore'
  import type { IProject } from './types'

  const selectProject = (project: IProject) => {
    projectStore.setSelectedProject(project)
  }
</script>

<section id="Projects" class="flex flex-col gap-16 px-8">
  <h2 class="text-xl font-bold uppercase fade-in">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <div class="special-card">
      <div class="special-card__left">
        <div class="special-card__header">
          <p class="special-card__title">{project.title}</p>
          <CardIcons links={getProjectLinks(project)}>
            <button class="icon-links__button" on:click={() => selectProject(project)}>
              <i class="fa fa-info-circle" />
            </button>
          </CardIcons>
        </div>

        <div class="special-card__body">
          <p>{project.description}</p>
        </div>

        <div class="special-card__footer">
          <AwardsBar awards={getProjectAwardElements(project)} />
        </div>
      </div>

      <div class="special-card__right">
        <button on:click={() => selectProject(project)} class="fade-in">
          <img src={project.image} alt="" class="special-card__image" />
        </button>
      </div>
    </div>
  {/each}
</section>
