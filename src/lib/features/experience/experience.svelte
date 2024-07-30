<script lang="ts">
  import Card from './experienceCard.svelte'
  import { EXPERIENCE } from './constants'

</script>

<section id="Experience" class="flex flex-col gap-6 relative ">
  <h2 class="text-lg font-bold uppercase ">Experience</h2>
  {#each EXPERIENCE as experience}
    <Card {experience} />
  {/each}

</section>
