<script context="module" lang="ts">
  export const FIXED_NAVBAR_POSITION = {
    middleLeft: 'left-8 top-1/2 transform -translate-y-1/2',
    middleRight: 'right-8 top-1/2 transform -translate-y-1/2'
  }

  export const FIXED_NAVBAR_STYLE = {
    base: 'hidden lg:flex flex-col z-30 fixed border items-center  bg-white shadow-md'
  }

  export const NAVBAR_BUTTON_STYLE = {
    base: 'flex flex-row gap-4 items-center text-md hover:text-frog-800 transition-all p-3',
    selectedSection: 'font-bold text-frog-800'
  }

</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { SECTIONS } from '../../features/header/constants'
  let selectedSection = SECTIONS[0]

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        selectedSection = SECTIONS.find((section) => section.title === sectionId) ?? SECTIONS[0]
      }
    })
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.6 // Trigger when 60% of the section is visible
    })

    SECTIONS.forEach((section) => {
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

<div class="{FIXED_NAVBAR_STYLE.base} {FIXED_NAVBAR_POSITION.middleLeft}">
  {#each SECTIONS as section}
    <a
      href={section.link}
      title={section.title}
      class="{NAVBAR_BUTTON_STYLE.base} {section === selectedSection ? NAVBAR_BUTTON_STYLE.selectedSection : ''}"
    >
      <i class={section.icon} />
    </a>
  {/each}
</div>
