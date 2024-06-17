<script context="module" lang="ts">
  export const positions = {
    topLeft: 'top-8 left-8',
    topRight: 'top-8 right-8',
    bottomLeft: 'bottom-8 left-8',
    bottomRight: 'bottom-8 right-8'
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  export let position: keyof typeof positions
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
  class={`fixed ${
    positions[position]
  } bg-navy-600 hover:bg-navy-800 text-zinc-50 font-bold py-2 px-4 rounded-md z-50 transition-all ${
    visible ? 'visible' : 'invisible'
  }`}
>
  <i class="fa fa-arrow-up" aria-hidden="true" />
</button>
