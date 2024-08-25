<script lang="ts">
  import { EXPERIENCE } from './constants'
  import Link from '$lib/components/elements/link/link.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import '$lib/components/elements/card/style/style.css'
  import Card from '$lib/components/elements/card/card.svelte'
</script>

<section id="Experience" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Experience</h2>
  {#each EXPERIENCE as experience}
    <Card>
      <div slot="left">
        <h3 class="card__title">{experience.startDate} - {experience.endDate}</h3>
      </div>

      <div slot="right">
        <Link href={experience.link} title={experience.company} isExternal={true}>
          <i class="fa-solid fa-arrow-up-right-from-square" />
          <p>{experience.company}</p>
        </Link>

        <p class="card_subtitle mt-2">{experience.position}</p>
        <p class="mt-2">{experience.description}</p>
        <TechnologiesBar technologies={experience.technologies} extraClasses="mt-4" />
      </div>
    </Card>
  {/each}
</section>
