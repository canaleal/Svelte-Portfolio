<script lang="ts">
  import Link from '$lib/components/elements/link/link.svelte'
  import '$lib/components/elements/link/style/style.css'
  import { getProjectLinks } from '../helpers/projectLinks'
  import type { IIconValueComponent, IProject } from '../types'

  export let project: IProject
  export let extraClasses: string = ''
  const projectLinks: IIconValueComponent[] = getProjectLinks(project)
</script>

{#if projectLinks.length > 0}
  <div class="flex flex-row gap-4 flex-wrap {extraClasses}">
    {#each projectLinks as link}
      <Link href={link.link ?? ''} title={link.title} isExternal={true}>
        <i class={link.icon}/>
        <p>{link.title}</p>
      </Link>
    {/each}
  </div>
{/if}
