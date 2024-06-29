<script lang="ts">
  import Card from './educationCard.svelte'
  import { EDUCATION } from './constants/index'
  import DecorationBar from '$lib/components/elements/decorationBar.svelte'
</script>

<section id="Education" class="flex flex-col gap-16 relative">
  <DecorationBar title="Education" />
  <h2 class="text-lg font-semibold uppercase text-white">Education</h2>
  {#each EDUCATION as education}
    <Card {education} />
  {/each}
</section>
