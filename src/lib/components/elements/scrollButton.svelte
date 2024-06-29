<script lang="ts">
  import { onMount } from 'svelte'
  import { FIXED_BUTTON_POSITION, FIXED_BUTTON_STYLE } from './fixedButton.svelte'
  export let position: keyof typeof FIXED_BUTTON_POSITION
  let visible = false

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop
    visible = scrolled > 300
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<button
  on:click={scrollToTop}
  class="{FIXED_BUTTON_STYLE.base} {FIXED_BUTTON_STYLE.color} {FIXED_BUTTON_POSITION[position]} {visible
    ? FIXED_BUTTON_STYLE.visible
    : FIXED_BUTTON_STYLE.invisible}"
>
  <i class="fa fa-arrow-up" aria-hidden="true" />
</button>
