<script lang="ts">
  import { getDeviconLink } from '$lib/utils/devicon-icons';
  import Tooltip from './tooltip.svelte';

  export let technologies: string[] = [];
  export let extraClasses: string = '';
  export let limit: number = 5;

  // Sliced elements for display
  let displayedTechnologies = technologies.slice(0, limit);
  let moreTechnologies = technologies.slice(limit);
</script>

<div class={`flex flex-row gap-2 flex-wrap ${extraClasses}`}>
  {#each displayedTechnologies as technology}
    <Tooltip position="bottom" isIcon={true}>
      <div slot="content">
        <img class="h-6 w-6" src={getDeviconLink(technology)} alt={technology} />
      </div>
      <div slot="main" class="technology-box">
        <p>{technology}</p>
      </div>
    </Tooltip>
  {/each}

  {#if moreTechnologies.length > 0}
    <Tooltip position="bottom">
      <div slot="content">
        {#each moreTechnologies as technology}
          <p>{technology}</p>
        {/each}
      </div>
      <div slot="main" class="technology-box technology-box--more">
        <p>+ {moreTechnologies.length} more</p>
      </div>
    </Tooltip>
  {/if}
</div>

<style lang="postcss">
  .technology-box {
    @apply px-3 py-1 items-center text-sm font-bold transition-all duration-300 rounded-sm;
    @apply bg-dark-900 text-white rounded-lg;
  }

  .technology-box:hover {
    @apply bg-frog-700;
  }

  .technology-box--more {
    @apply bg-smoke-100 text-dark-900 cursor-pointer;
  }

  .technology-box--more:hover {
    @apply bg-smoke-300;
  }
</style>
