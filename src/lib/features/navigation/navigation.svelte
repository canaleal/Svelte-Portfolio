<script context="module" lang="ts">
  export const FIXED_NAVBAR_POSITION = {
    middleLeft: 'left-8 top-1/2 transform -translate-y-1/2',
    middleRight: 'right-8 top-1/2 transform -translate-y-1/2'
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { NAVIGATION_SECTIONS } from './constants'

  let selectedSection = NAVIGATION_SECTIONS[0]

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        selectedSection = NAVIGATION_SECTIONS.find((section) => section.title ===  entry.target.id) ?? NAVIGATION_SECTIONS[0]
      }
    })
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5 // Trigger when 60% of the section is visible
    })

    NAVIGATION_SECTIONS.forEach((section) => {
      const sectionElement = document.querySelector(`#${section.title}`)
      if (sectionElement) {
        observer.observe(sectionElement)
      }
    })

    return () => {
      observer.disconnect()
    }
  })
</script>

<div class="fixed-navbar {FIXED_NAVBAR_POSITION.middleLeft}">
  {#each NAVIGATION_SECTIONS as section}
    <a
      href={section.link}
      title={section.title}
      class="fixed-navbar__button {section === selectedSection ?'fixed-navbar__button--selected' : ''}"
    >
      <i class={section.icon} />
    </a>
  {/each}
</div>


<style lang="postcss">

  .fixed-navbar {
    @apply hidden lg:flex flex-col z-30 fixed items-center  border border-smoke-300 bg-smoke-300  shadow-md rounded-lg overflow-hidden fade-in;
  }

  .fixed-navbar__button {
    @apply flex flex-row gap-4 items-center hover:text-frog-700 transition-all p-3;
  }

  .fixed-navbar__button--selected {
    @apply text-frog-700 ;
  }


  .fade-in {
    animation: fade-in 0.6s ease-in-out both;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
