<script lang="ts">
  import { PROJECTS } from './constants/index'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import ProjectAwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectIcons from './widgets/projectIcons.svelte'

</script>

<section id="Projects" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <div class="special-card group">
    
      {#if project.image.includes('mp4')}
        <video src={project.image} class="special-card__image"  autoplay muted loop />
      {:else}
        <img
          src={project.image}
          alt={project.title}
          class="special-card__image"
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
        />
      {/if}

      <div class="special-card__overlay ">
        <div class="special-card__header">
          <p class="font-extrabold text-3xl">{project.title}</p>
          <ProjectIcons {project} />
        </div>

        <div class="special-card__body">
          <p>{project.description}</p>
        </div>

        <div class="special-card__footer">
          <TechnologiesBar technologies={project.technologies} extraClasses="hidden lg:flex" />
          <ProjectAwardsBar {project} />
        </div>
      </div>
    </div>
  {/each}
</section>

<style lang="postcss">
  .special-card {
    @apply relative rounded-3xl h-[28rem] overflow-hidden;
  }

  .special-card__image {
    @apply h-full w-full object-cover  group-hover:scale-105 transition-all ease-in-out duration-500;
  }

  .special-card__overlay {
    @apply absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-80 text-white p-8 flex flex-col;
  }

  .special-card__header {
    @apply flex flex-row justify-between items-center;
  }

  .special-card__body {
    @apply flex flex-col mt-4 w-full lg:w-1/2;
  }

  .special-card__footer {
    @apply flex flex-row justify-between items-center mt-auto;
  }
</style>
