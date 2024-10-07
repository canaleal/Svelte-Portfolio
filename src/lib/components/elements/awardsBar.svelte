<script lang="ts">
  import type { IIconValueComponent } from '$lib/types'

  export let extraClasses: string = ''
  export let awards: IIconValueComponent[]
</script>

{#if awards.length > 0}
  <div class="award-container {extraClasses}">
    {#each awards as award}
      <p class="award-container__item">
        <span class={award.icon} />
        {award.title}
      </p>
    {/each}
  </div>
{/if}

<style lang="postcss">
  .award-container {
    @apply flex flex-row gap-4 flex-wrap;
  }

  .award-container__item {
    @apply bg-dark-600 border-dark-500 border text-white px-3 py-1 items-center text-sm font-semibold transition-all duration-500 rounded-md gap-2 flex;
  }
</style>
