<script lang="ts">
  import { EXPERIENCE } from './constants'
  import { getExperienceLinks } from './utils/experienceUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  let selectedExperience = EXPERIENCE[0];
</script>

<section id="Experience" class="flex flex-col gap-16 relative">
  <h2 class="text-xl font-bold uppercase fade-in mx-auto">Experience</h2>
  <div class="button-group">
    {#each EXPERIENCE as experience}
      <button
        class="button-group__item {experience === selectedExperience ? 'button-group__item--selected' : ''}"
        on:click={() => (selectedExperience = experience)}>{experience.company}</button
      >
    {/each}
  </div>

  <div class="special-card h-64">
    <div class="special-card__left">
      <p>{selectedExperience.startDate} - {selectedExperience.endDate}</p>
    </div>
    <div class="special-card__right">
      <div class="special-card__header">
        <p class="special-card__title">{selectedExperience.company}</p>
        <CardIcons links={getExperienceLinks(selectedExperience)} />
      </div>

      <div class="special-card__body">
        <p>{selectedExperience.description}</p>
      </div>

      <div class="special-card__footer">
        <p class="special-card__subtitle ">{selectedExperience.position}</p>
      </div>
    </div>
  </div>

</section>
