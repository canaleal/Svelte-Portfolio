<script context="module" lang="ts">
  export const TOOLTIP_POSITIONS = {
    top: '-top-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-1'
  }

</script>

<script lang="ts">
  export let position: keyof typeof TOOLTIP_POSITIONS = 'bottom'
  export let isIcon = false
</script>

<div class="tooltip group">
  <div class="tooltip__popup { !isIcon ? "tooltip__popup--default" : ""} tooltip__popup--visible {TOOLTIP_POSITIONS[position]}">
    <slot name="content" />
  </div>
  <slot name="main"/>
</div>



<style lang="postcss">
  .tooltip{
    @apply flex relative w-fit;
  }

  .tooltip__popup {
    @apply absolute z-10 items-center transition-all duration-300;
  }

  .tooltip__popup--default {
    @apply text-sm font-bold bg-frog-700 text-white shadow-md py-1 px-3 min-w-fit  rounded-lg;
  }

  .tooltip__popup--visible {
    @apply invisible opacity-0 group-hover:visible  group-hover:opacity-100;
  }
</style>