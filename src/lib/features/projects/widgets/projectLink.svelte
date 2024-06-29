<script lang="ts">
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import type { IProject } from '../types'
  export let project: IProject
</script>

{#if project.projectLink}
  <a
    href={project.projectLink}
    target="_blank"
    rel="noreferrer"
    title={project.title}
    class={LINK_ICON_BUTTON_STYLE.base}
  >
    <i class="fa-solid fa-arrow-up-right-from-square" />
    <p>{project.title}</p>
  </a>
{:else if project.githubLink}
  <a
    href={project.githubLink}
    target="_blank"
    rel="noreferrer"
    title={project.title}
    class={LINK_ICON_BUTTON_STYLE.base}
  >
    <i class="fa-brands fa-github" />
    <p>{project.title}</p>
  </a>
{/if}
