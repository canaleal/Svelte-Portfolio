<script lang="ts">
  import type { IIconValueComponent } from '$lib/types'

  export let links: IIconValueComponent[] = []
  export let extraClasses: string = ''
</script>

<div class="icon-links {extraClasses}">
  {#each links as link}
    <a href={link.link ?? ''} target="_blank" rel="noreferrer" title={link.title} class="icon-links__button">
      <i class={link.icon} />
    </a>
  {/each}
  <slot />
  <slot name="extra" />
</div>
