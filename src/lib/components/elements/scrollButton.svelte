<script lang="ts">
  import { FIXED_BUTTON_POSITION } from './fixedButton/fixedButtonPosition'
  import './fixedButton/style/style.css'
  import { onMount } from 'svelte'

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
  class="fixed-button {FIXED_BUTTON_POSITION[position]} {visible ? '' : 'fixed-button--hidden'}"
>
  <i class="fa fa-arrow-up" aria-hidden="true" />
</button>
