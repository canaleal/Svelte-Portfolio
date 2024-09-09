<script lang="ts">
  import  '$lib/components/elements/highlightedText/style/style.css'
  import { getAwardElements } from '../utils/awardsUtils'
  import type { IIconValueComponent, IProject } from '../types'

  export let project: IProject
  export let extraClasses: string = ''
  const awards: IIconValueComponent[] = getAwardElements(project)
</script>

{#if awards.length > 0}
  <div class="award-container group-hover:translate-x-0  {extraClasses}">
    {#each awards as award}
      <p class="award-container__item ">
        <span class={award.icon} />
        {award.title}
      </p>
    {/each}
  </div>
{/if}

<style lang="postcss">


  .award-container {
    @apply flex flex-row gap-4 flex-wrap;
    @apply lg:translate-x-full lg:pl-8 lg:transition-transform lg:duration-500;
  }

  .award-container__item {
    @apply bg-white text-dark-900 px-3 py-1 items-center text-sm font-bold transition-all duration-300 rounded-md;
  }

</style>