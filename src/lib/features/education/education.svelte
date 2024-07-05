<script lang="ts">
  import Card from './educationCard.svelte'
  import { EDUCATION } from './constants/index'

</script>

<section id="Education" class="flex flex-col gap-16 relative ">
  <h2 class="text-lg font-bold uppercase ">Education</h2>
  {#each EDUCATION as education}
    <Card {education} />
  {/each}
</section>
