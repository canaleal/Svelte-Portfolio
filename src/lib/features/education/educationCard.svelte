<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import '$lib/components/elements/link/style/style.css'
  import type { IEducation } from './types/index'
  import EducationAwardsBar from './widgets/educationAwardsBar.svelte'
  import Link from '$lib/components/elements/link/link.svelte'

  export let education: IEducation
</script>

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


<style lang="postcss">
  .card {
    @apply flex flex-col md:flex-row gap-4 p-8 hover:bg-smoke-100 rounded-lg hover:shadow-md transition-all duration-300;
  }
</style>
