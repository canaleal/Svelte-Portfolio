<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import Link from '$lib/components/form/link.svelte'
  import type { IExperience } from './types/index'
  export let experience: IExperience
</script>

<div class="flex flex-col md:flex-row gap-4 cursor-hover-trigger">
  <div class="flex-1">
    <h3 class="text-xs font-semibold uppercase">{experience.start} - {experience.end}</h3>
  </div>

  <div class="flex-3 flex flex-col">
    <Link title={experience.company} link={experience.link}>
      <span class="fa-solid fa-arrow-up-right-from-square" />
      {`${experience.company}`}
    </Link>

    <p class="text-md text-navy-600 font-semibold mt-2">{experience.position}</p>
    <p class="text-sm mt-2">{experience.description}</p>
    <TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
  </div>
</div>
