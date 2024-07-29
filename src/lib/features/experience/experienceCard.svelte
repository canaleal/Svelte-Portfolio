<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import '$lib/components/elements/link/style/style.css'
  import type { IExperience } from './types/index'
  import Link from '$lib/components/elements/link/link.svelte'
  export let experience: IExperience
</script>

<div class="card">
  <div class="flex-1 hidden md:flex">
    <h3 class="text-xs font-bold uppercase">{experience.startDate} - {experience.endDate}</h3>
  </div>

  <div class="flex-4 flex flex-col">
    <Link href={experience.link} title={experience.company} isExternal={true}>
      <i class="fa-solid fa-arrow-up-right-from-square" />
      <p>{experience.company}</p>
    </Link>

    <p class="text-md font-bold mt-2 text-frog-700">{experience.position}</p>
    <p class="mt-2">{experience.description}</p>
    <TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
  </div>
</div>

<style lang="postcss">
  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-300 rounded-sm hover:shadow-md transition-all duration-300;
  }
</style>
