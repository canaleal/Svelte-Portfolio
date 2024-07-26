
<script lang="ts">
  import { getDeviconLink } from '$lib/utils/devicon-icons'

  import Tooltip from './tooltip.svelte'

  export let technologies: string[]
  export let extraClasses: string = ''
  export let limit: number = 5
</script>

<div class="flex flex-row gap-2 flex-wrap {extraClasses}">
  {#each technologies.slice(0, limit) as technology}
    <Tooltip position="bottom" isIcon={true}>
      <div slot="content">
        <img  class="h-6 w-6" src={getDeviconLink(technology)} alt={technology}/>
      </div>
      <div slot="main" class="technology-box">
        <p>{technology}</p>
      </div>
    </Tooltip>
  {/each}

  {#if technologies.length > limit}
    <Tooltip position="bottom">
      <div slot="content">
        {#each technologies.slice(limit) as technology}
          <p>{technology}</p>
        {/each}
      </div>

      <div slot="main" class="technology-box technology-box--more">
        <p>+ {technologies.length - limit} more</p>
      </div>
    </Tooltip>
  {/if}
</div>


<style lang="postcss">

  .technology-box {
    @apply px-3 py-1 items-center text-sm font-bold  transition-all duration-300 rounded-md;
    @apply bg-dark-900 text-white  hover:bg-frog-700;
  }

  .technology-box--more {
    @apply bg-frog-700 text-white cursor-pointer;
  }


  .technology-box--more:hover {
    @apply bg-frog-800;
  }

</style>
