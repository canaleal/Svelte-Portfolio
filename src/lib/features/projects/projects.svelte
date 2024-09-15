<script lang="ts">
  import { PROJECTS } from './constants/index'
  import ProjectAwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectIcons from './widgets/projectIcons.svelte'
</script>

<section id="Projects" class="flex flex-col gap-16 relative ">
  <h2 class="text-lg font-bold uppercase ">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <div class="special-card">
      <div class="special-card__left">
        <div class="special-card__header">
          <p class="text-xl font-semibold">{project.title}</p>
          <ProjectIcons {project} />
        </div>

        <div class="special-card__body">
          <p>{project.description}</p>
        </div>

        <div class="special-card__footer">
          <ProjectAwardsBar {project} />
        </div>
      </div>

      <div class="special-card__right group">
        <img src={project.image} alt="" class="special-card__image" />
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  .special-card {
    @apply flex flex-row gap-8;
  }

  .special-card__left {
    @apply flex-1 flex flex-col gap-4;
  }

  .special-card__right {
    @apply flex-1 relative;
  }

  .special-card__header {
    @apply flex flex-row justify-between items-center;
  }

  .special-card__image {
    @apply h-full w-full object-cover h-72;
  }

  .special-card__footer {
    @apply flex flex-row gap-4 mt-auto;
  }
</style>
