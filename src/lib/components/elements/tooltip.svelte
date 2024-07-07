<script context="module" lang="ts">
  export const TOOLTIP_POSITIONS = {
    top: '-top-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-1'
  }

  export const TOOLTIPS_STYLE = {
    base: 'flex relative w-fit group',
    tooltipBase: 'absolute z-10 items-center transition-all duration-300',
    tooltipColor: 'text-sm font-bold bg-frog-800 text-white shadow-md py-1 px-3 min-w-fit  rounded-md',
    visible: 'invisible opacity-0 group-hover:visible  group-hover:opacity-100'
  }
</script>

<script lang="ts">
  export let position: keyof typeof TOOLTIP_POSITIONS = 'bottom'
  export let isIcon = false
</script>

<div class={TOOLTIPS_STYLE.base}>
  <div class="{TOOLTIPS_STYLE.tooltipBase} { !isIcon ? TOOLTIPS_STYLE.tooltipColor : ""} {TOOLTIPS_STYLE.visible} {TOOLTIP_POSITIONS[position]}">
    <slot name="content" />
  </div>
  <slot name="main"/>
</div>
