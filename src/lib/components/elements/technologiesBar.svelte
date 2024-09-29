<script lang="ts">
  import Tooltip from './tooltip.svelte'

  export let technologies: string[] = []
  export let extraClasses: string = ''
  export let limit: number = 8
  export let lightTheme: boolean = false

  // Sliced elements for display
  let displayedTechnologies = technologies.slice(0, limit)
  let moreTechnologies = technologies.slice(limit)
</script>

<div class={`flex flex-row gap-2 flex-wrap ${extraClasses}`}>
  {#each displayedTechnologies as technology}
    <div class="technology-box {lightTheme? "technology-box--light": ""} ">
      <p>{technology}</p>
    </div>
  {/each}

  {#if moreTechnologies.length > 0}
    <Tooltip position="bottom">
      <div slot="content">
        {#each moreTechnologies as technology}
          <p>{technology}</p>
        {/each}
      </div>
      <div slot="main" class="technology-box {lightTheme? "technology-box--light": ""}  technology-box--more">
        <p>+ {moreTechnologies.length} more</p>
      </div>
    </Tooltip>
  {/if}
</div>

<style lang="postcss">
  .technology-box {
    @apply px-3 py-1 items-center text-sm font-bold transition-all duration-300 rounded-md;
    @apply bg-dark-900 text-white;
  }

  .technology-box:hover {
    @apply bg-frog-800;
  }

  .technology-box--more {
    @apply bg-smoke-200 text-dark-900 cursor-pointer;
  }

  .technology-box--light {
    @apply bg-white text-dark-900;
  }

  .technology-box--more:hover {
    @apply bg-smoke-300;
  }
</style>
