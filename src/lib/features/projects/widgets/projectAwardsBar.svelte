<script lang="ts">
  import { HIGHLIGHTER_TEXT_STYLE } from '$lib/components/elements/highlightedText.svelte'
  import { getAwardElements } from '../helpers/awardsUtils'
  import type { IIconValueComponent, IProject } from '../types'

  export let project: IProject
  export let extraClasses: string = ''
  const awards: IIconValueComponent[] = getAwardElements(project)
</script>

{#if awards.length > 0}
  <div class="flex flex-row gap-4 flex-wrap {extraClasses}">
    {#each awards as award}
      <p class="{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}">
        <span class={award.icon} />
        {award.title}
      </p>
    {/each}
  </div>
{/if}
