<script context="module" lang="ts">
  export const TECHNOLOGY_BOX_STYLES = {
    base: 'rounded-md px-3 py-1 items-center text-sm font-semibold',
    color: ' bg-dark-900 border border-dark-400 text-white hover:bg-frog-800 hover:text-dark-900 transition-colors duration-300'
  }
</script>

<script lang="ts">
  export let technologies: string[]
  export let extraClasses: string = ''
  export let limit: number = 5
</script>

<div class="flex flex-row gap-2 flex-wrap {extraClasses}">
  {#each technologies.slice(0, limit) as technology}
    <div class="{TECHNOLOGY_BOX_STYLES.base} {TECHNOLOGY_BOX_STYLES.color}">
      <p>{technology}</p>
    </div>
  {/each}

  {#if technologies.length > limit}
    <div class="{TECHNOLOGY_BOX_STYLES.base} {TECHNOLOGY_BOX_STYLES.color}">
      <p>+ {technologies.length - limit} more</p>
    </div>
  {/if}
</div>
