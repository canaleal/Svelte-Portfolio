<script context="module" lang="ts">
  export const DECORATION_BAR_STYLES = {
    base: ' absolute top-1/2 -left-1 origin-bottom-left -rotate-90 -translate-y-1/2 text-[8px] text-black-400',
    strokeColor: '#403e41'
  }

  export const DECORATION_BAR_POSITION = {
    left: 'left-1 md:-left-6',
    right: 'right-1 md:-right-6'
  }
</script>

<script lang="ts">
  export let position: keyof typeof DECORATION_BAR_POSITION = 'left'
  export let title = 'FOT'
</script>

<div class="absolute top-0 h-full w-2 {DECORATION_BAR_POSITION[position]}">
  <div class="{DECORATION_BAR_STYLES.base} {DECORATION_BAR_STYLES.strokeColor}">
    {title}
  </div>
  <svg
    class="absolute -top-[1px] -left-[3.5px]"
    width="8"
    height="100%"
    viewBox="0 0 8 100%"
    style="position:relative;overflow:visible"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M1 4L4 1L7 4"
      stroke={DECORATION_BAR_STYLES.strokeColor}
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    /><line
      x1="4"
      y1="1"
      x2="4"
      y2="100%"
      stroke={DECORATION_BAR_STYLES.strokeColor}
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    /></svg
  ><svg
    class="absolute -bottom-[1px] -left-[3.5px]"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M1 1L4 4L7 1"
      stroke={DECORATION_BAR_STYLES.strokeColor}
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    /></svg
  >
</div>
