<script lang="ts">
  import { EXPERIENCE } from './constants'
  import { getExperienceLinks } from './utils/experienceUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
</script>

<section id="Experience" class="section">
  <h2 class="section__title fade-in">Experience</h2>

  <div class="section__grid">
  {#each EXPERIENCE as experience, idx}
  
    <div class="special-card special-card--grad fade-in">
      <div class="special-card__left">
        <div class="special-card__header">
          <p class="special-card__title">{experience.company}</p>
          <CardIcons links={getExperienceLinks(experience)} />
        </div>

        <div class="special-card__body">
          <p class="special-card__subtitle ">{experience.position}</p>
          <p>{experience.description}</p>
        </div>

        <div class="special-card__footer">
          <p class="font-bold text-white">{experience.startDate} - {experience.endDate}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
</section>
