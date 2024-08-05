<script lang="ts">

  import { EDUCATION } from './constants/index'
  import Link from '$lib/components/elements/link/link.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import EducationAwardsBar from './widgets/educationAwardsBar.svelte'

</script>

<section id="Education" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Education</h2>
  {#each EDUCATION as education}
  <div class="card">
    <div class="flex-1 hidden md:flex">
      <h3 class="text-xs font-bold uppercase">{education.startDate} - {education.endDate}</h3>
    </div>
  
    <div class="flex-4 flex flex-col">
  
      <Link href={education.link} title={education.school} isExternal={true}>
        <i class="fa-solid fa-arrow-up-right-from-square" />
        <p>{education.school}</p>
      </Link>
  
      <EducationAwardsBar {education} extraClasses="mt-2" />
      <p class="mt-2">{education.description}</p>
      <TechnologiesBar technologies={education.technologies} extraClasses="mt-4" />
    </div>
  </div>
  
  {/each}  
</section>


<style lang="postcss">
  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-300 rounded-sm hover:shadow-md transition-all duration-300;
  }
</style>
