<script lang="ts">
  import { EXPERIENCE } from './constants'
  import { getExperienceLinks } from './utils/experienceUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
</script>

<section id="Experience" class="flex flex-col gap-16 relative ">
  <h2 class="text-xl font-bold uppercase fade-in">Experience</h2>
  {#each EXPERIENCE as experience}
    <div class="special-card">
      <div class="special-card__left">
        <p>{experience.startDate} - {experience.endDate}</p>
      </div>
      <div class="special-card__right">
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
     
    </div>
  {/each}
</section>
