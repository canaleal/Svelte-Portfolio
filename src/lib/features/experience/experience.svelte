<script lang="ts">
  import { EXPERIENCE } from './constants'
  import { getExperienceLinks } from './utils/experienceUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'

</script>

<section id="Experience" class="flex flex-col gap-16 lg:gap-24 px-12 py-12 bg-dark-600 border-dark-500 border rounded-xl shadow">
  <h2 class="section-title fade-in">Experience</h2>

  {#each EXPERIENCE as experience}
 

  <div class="special-card  fade-in">
    <div class="special-card__left">
      <div class="special-card__header">
        <p class="special-card__title">{experience.company}</p>
        <CardIcons links={getExperienceLinks(experience)} />
      </div>

      <div class="special-card__body">
        <p>{experience.description}</p>
      </div>

      <div class="special-card__footer">
        <p class="special-card__subtitle ">{experience.position}</p>
      </div>
    </div>

    <div class="special-card__right">
      <p class="font-bold text-white">{experience.startDate} - {experience.endDate}</p>

      <TechnologiesBar technologies={experience.technologies} lightTheme={true}/>
    </div>
  </div>

  {/each}

</section>
