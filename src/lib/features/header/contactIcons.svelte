<script context="module" lang="ts">
  export const CONTACT_ICON_BUTTON_STYLE = {
    base: 'p-2 hover:text-frog-800 text-2xl transition-all'
  }
</script>

<script lang="ts">
  import { CONTACT_ITEMS } from './constants'
  export let extraClasses = ''
</script>

<div class="flex flex-row gap-2 w-fit {extraClasses} bg-dark-900 border border-dark-400 rounded-md">
  {#each CONTACT_ITEMS as contact}
    <a
      href={contact.link}
      target="_blank"
      rel="noreferrer"
      title={contact.title}
      class={CONTACT_ICON_BUTTON_STYLE.base}
    >
      <i class={contact.icon} />
    </a>
  {/each}
</div>
