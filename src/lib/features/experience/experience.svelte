<script lang="ts">
  import Card from './experienceCard.svelte'
  import { EXPERIENCE } from './constants'
  import DecorationBar from '$lib/components/elements/decorationBar.svelte'
</script>

<section id="Work" class="flex flex-col gap-16 relative">
  <DecorationBar title="Experience" />
  <h2 class="text-lg font-semibold uppercase text-white">Experience</h2>
  {#each EXPERIENCE as experience}
    <Card {experience} />
  {/each}
</section>
