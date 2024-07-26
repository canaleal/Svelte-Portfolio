<script lang="ts">
  import type { IEducation } from '../types'
  import  '$lib/components/elements/highlightedText/style/style.css'

  export let education: IEducation
  export let extraClasses = ''
</script>

<div class="flex flex-row gap-4 flex-wrap {extraClasses}">
  <p class='highlighted-text highlighted-text--frog'>
    <span class="fa fa-award" />
    {education.grade}
  </p>

  {#if education.awards}
    {#each education.awards as award}
      <p class='highlighted-text highlighted-text--frog'>
        <span class="fa fa-trophy" />
        {award}
      </p>
    {/each}
  {/if}
</div>


