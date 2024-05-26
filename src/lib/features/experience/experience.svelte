<script lang="ts">
  import Card from './experienceCard.svelte'
  import { EXPERIENCE } from './constants'
</script>

<section id="Experience" class="flex flex-col gap-16">
  <h2 class="text-xl font-bold uppercase">Experience</h2>

  {#each EXPERIENCE as experience}
    <Card {experience} />
  {/each}
</section>
