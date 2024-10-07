<script lang="ts">
  import { EDUCATION } from './constants/index'
  import { getEducationAwardElements, getEducationLinks } from './utils/educationUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import AwardsBar from '$lib/components/elements/awardsBar.svelte'
</script>

<section id="Education" class="flex flex-col gap-16 lg:gap-24 px-8 ">
  <h2 class="section-title fade-in">Education</h2>
  {#each EDUCATION as education}
    <div class="special-card   fade-in ">
  
      <div class="special-card__left">
        <div class="special-card__header">
          <p class="special-card__title">{education.school}</p>
          <CardIcons links={getEducationLinks(education)} />
        </div>

        <div class="special-card__body">
          <p>{education.description}</p>
        </div>

        <div class="special-card__footer">
          <AwardsBar awards={getEducationAwardElements(education)}  />
        </div>
      </div>

      <div class="special-card__right">
        <p class="font-bold text-white">{education.startDate} - {education.endDate}</p>
      </div>
      
    </div>
  {/each}
</section>
