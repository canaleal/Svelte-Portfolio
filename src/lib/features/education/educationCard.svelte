<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import type { IEducation } from './types/index'
  import EducationAwardsBar from './widgets/educationAwardsBar.svelte'

  export let education: IEducation
</script>

<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 hidden md:flex">
    <h3 class="text-xs font-bold uppercase">{education.startDate} - {education.endDate}</h3>
  </div>

  <div class="flex-4 flex flex-col">
    <a href={education.link} title={education.school} class={LINK_ICON_BUTTON_STYLE.base}>
      <i class="fa-solid fa-arrow-up-right-from-square" />
      <p>{education.program}</p>
    </a>

    <EducationAwardsBar {education} extraClasses="mt-2" />
    <p class="mt-2">{education.description}</p>
    <TechnologiesBar technologies={education.technologies} extraClasses="mt-4" />
  </div>
</div>
