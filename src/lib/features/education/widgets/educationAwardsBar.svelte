<script lang="ts">
  import { HIGHLIGHTER_TEXT_STYLE } from '$lib/components/elements/highlightedText.svelte'
  import type { IEducation } from '../types'

  export let education: IEducation
  export let extraClasses = ''
</script>

<div class="flex flex-row gap-4 flex-wrap {extraClasses}">
  <p class='{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}'>
    <span class="fa fa-award" />
    {education.grade}
  </p>

  {#if education.awards}
    {#each education.awards as award}
      <p class='{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}'>
        <span class="fa fa-trophy" />
        {award}
      </p>
    {/each}
  {/if}
</div>
