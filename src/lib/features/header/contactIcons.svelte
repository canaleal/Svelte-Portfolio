
<script lang="ts">
  import { CONTACT_ITEMS } from './constants'
</script>

<div class="flex flex-row h-fit w-fit">
  {#each CONTACT_ITEMS as contact}
    <a
      href={contact.link}
      target="_blank"
      rel="noreferrer"
      title={contact.title}
      class="contact-icon-button"
    >
      <i class={contact.icon} />
    </a>
  {/each}
</div>


<style lang="postcss">
  .contact-icon-button {
    @apply p-2 hover:text-frog-700 text-2xl transition-all;
  }
</style>