<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import type { IEducation } from './types/index'
  import EducationAwardsBar from './widgets/educationAwardsBar.svelte'

  export let education: IEducation
</script>

<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 hidden md:flex">
    <h3 class="text-xs font-semibold uppercase">{education.start} - {education.end}</h3>
  </div>

  <div class="flex-3 flex flex-col">
    <a href={education.link} title={education.school} class={LINK_ICON_BUTTON_STYLE.base}>
      <i class="fa-solid fa-arrow-up-right-from-square" />
      <p>{education.school}</p>
    </a>

    <p class="text-md font-semibold mt-2 text-frog-800">{education.program}</p>
    <p class="text-sm mt-2">{education.description}</p>
    <EducationAwardsBar {education} extraClasses="mt-4" />
    <TechnologiesBar technologies={education.technologies} extraClasses="mt-4" />
  </div>
</div>
