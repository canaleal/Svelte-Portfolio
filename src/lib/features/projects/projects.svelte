<script lang="ts">
  import Card from './projectsCard.svelte'
  import { PROJECTS } from './constants/index'

</script>

<section id="Projects" class="flex flex-col gap-12 relative ">
  <h2 class="text-lg font-bold uppercase ">Projects</h2>
  {#each PROJECTS.slice(0, 4) as project}
    <Card {project} />
  {/each}
</section>
