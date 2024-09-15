<script lang="ts">
  import { EDUCATION } from './constants/index'
  import { getEducationAwardElements, getEducationLinks } from './utils/educationUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import AwardsBar from '$lib/components/elements/awardsBar.svelte'
</script>

<section id="Education" class="flex flex-col gap-16 relative ">
  <h2 class="text-xl font-bold uppercase fade-in">Education</h2>
  {#each EDUCATION as education}
    <div class="special-card">
      <div class="special-card__left">
        <p>{education.startDate} - {education.endDate}</p>
      </div>
      <div class="special-card__right">
        <div class="special-card__header">
          <p class="special-card__title">{education.school}</p>
          <CardIcons links={getEducationLinks(education)} />
        </div>

        <div class="special-card__body">
          <p>{education.description}</p>
        </div>

        <div class="special-card__footer">
          <AwardsBar awards={getEducationAwardElements(education)} />
        </div>
      </div>
    </div>
  {/each}
</section>
