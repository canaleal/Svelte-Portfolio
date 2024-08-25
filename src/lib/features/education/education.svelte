<script lang="ts">
  import { EDUCATION } from './constants/index'
  import Link from '$lib/components/elements/link/link.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import EducationAwardsBar from './widgets/educationAwardsBar.svelte'
  import '$lib/components/elements/card/style/style.css'
  import Card from '$lib/components/elements/card/card.svelte'
</script>

<section id="Education" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Education</h2>
  {#each EDUCATION as education}
    <Card>
      <div slot="left">
        <h3 class="card__title">{education.startDate} - {education.endDate}</h3>
      </div>
      <div slot="right">
        <Link href={education.link} title={education.school} isExternal={true}>
          <i class="fa-solid fa-arrow-up-right-from-square" />
          <p>{education.school}</p>
        </Link>

        <EducationAwardsBar {education} extraClasses="mt-2" />
        <p class="mt-2">{education.description}</p>
        <TechnologiesBar technologies={education.technologies} extraClasses="mt-4" />
      </div>
    </Card>
  {/each}
</section>
