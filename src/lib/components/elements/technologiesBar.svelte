<script context="module" lang="ts">
  export const TECHNOLOGY_BOX_STYLES = {
    base: 'px-3 py-1 items-center text-sm font-bold  transition-all duration-300 rounded-md',
    color: ' bg-dark-900 text-white  hover:bg-frog-800',
    primary: ' bg-frog-800 text-white cursor-pointer'
  }
</script>

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
      <div slot="main" class="{TECHNOLOGY_BOX_STYLES.base} {TECHNOLOGY_BOX_STYLES.color}">
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

      <div slot="main" class="{TECHNOLOGY_BOX_STYLES.base} {TECHNOLOGY_BOX_STYLES.primary}">
        <p>+ {technologies.length - limit} more</p>
      </div>
    </Tooltip>
  {/if}
</div>
