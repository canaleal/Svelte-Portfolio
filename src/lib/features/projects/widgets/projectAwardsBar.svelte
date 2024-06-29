<script lang="ts">
  import { HIGHLIGHTER_TEXT_STYLE } from '$lib/components/elements/highlightedText.svelte'
  import { formatNumber } from '$lib/utils/text-format'
  import type { IProject } from '../types'

  export let project: IProject
  export let extraClasses = ''
</script>

{#if project.stars || project.downloads || (project.awards && project.awards.length > 0)}
  <div class="flex flex-row gap-4 flex-wrap {extraClasses}">
    {#if project.stars}
      <p class="{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}">
        <span class="fa fa-star" />
        {formatNumber(project.stars)}
      </p>
    {/if}
    {#if project.downloads}
      <p class="{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}">
        <span class="fa fa-download" />
        {formatNumber(project.downloads)}
      </p>
    {/if}
    {#if project.awards}
      {#each project.awards as award}
        <p class="{HIGHLIGHTER_TEXT_STYLE.base} {HIGHLIGHTER_TEXT_STYLE.frog}">
          <span class="fa fa-trophy" />
          {award}
        </p>
      {/each}
    {/if}
  </div>
{/if}
