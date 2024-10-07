<script lang="ts">
  import ScrollButton from '$lib/components/elements/scrollButton.svelte'
  import Header from '$lib/components/header/header.svelte'
  import '../styles/style.css'
  import { onMount } from 'svelte'

  let elements = []

  onMount(() => {
    const observerOptions = {
      threshold: 0.2
    }

    const observerCallback = (entries: any[], observer: { unobserve: (arg0: any) => void }) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target) // Stop observing after it's visible
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    elements = [...document.querySelectorAll('.fade-in')]
    elements.forEach((el) => {
      observer.observe(el)
    })
  })
</script>

<svelte:head>
  <title>Alex Canales Portfolio</title>
  <meta
    name="description"
    content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces."
  />
</svelte:head>

<div class="flex flex-col w-screen relative overflow-hidden  bg-dark-900 text-dark-400">
  <Header />
  <slot />
  <ScrollButton position="bottomRight" />
</div>
