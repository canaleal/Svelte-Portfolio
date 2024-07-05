<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import type { IExperience } from './types/index'
  export let experience: IExperience
</script>

<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 hidden md:flex">
    <h3 class="text-xs font-bold uppercase">{experience.start} - {experience.end}</h3>
  </div>

  <div class="flex-4 flex flex-col">
    <a
      href={experience.link}
      target="_blank"
      rel="noreferrer"
      title={experience.company}
      class={LINK_ICON_BUTTON_STYLE.base}
    >
      <i class="fa-solid fa-arrow-up-right-from-square" />
      <p>{experience.company}</p>
    </a>

    <p class="text-md font-bold mt-2 text-frog-800">{experience.position}</p>
    <p class="mt-2">{experience.description}</p>
    <TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
  </div>
</div>
