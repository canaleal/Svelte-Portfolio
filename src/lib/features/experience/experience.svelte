<script lang="ts">
  import { EXPERIENCE } from './constants'
  import Link from '$lib/components/elements/link/link.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
</script>

<section id="Experience" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Experience</h2>
  {#each EXPERIENCE as experience}
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
  {/each}
</section>

<style lang="postcss">
  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-300 rounded-sm hover:shadow-md transition-all duration-300;
  }
</style>
