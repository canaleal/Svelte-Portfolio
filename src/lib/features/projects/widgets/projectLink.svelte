<script lang="ts">
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import { getProjectLinks } from '../helpers/projectLinks'
  import type { IProject } from '../types'

  export let project: IProject
  export let extraClasses: string = ''
  const projectLinks = getProjectLinks(project)
</script>


{#if projectLinks.length > 0}
  <div class="flex flex-row gap-4 flex-wrap {extraClasses}">
    {#each projectLinks as link}
      <a
        href={link.link}
        target="_blank"
        rel="noreferrer"
        title={link.title}
        class={LINK_ICON_BUTTON_STYLE.base}
      >
        <i class={link.icon} />
        <p>{link.title}</p>
      </a>
    {/each}
  </div>
{/if}

