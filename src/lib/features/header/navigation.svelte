<script context="module" lang="ts">
  export const NAVBAR_BUTTON_STYLE = {
    base: 'flex flex-row gap-4 items-center group hover:text-frog-800 transition-all',
    selectedSection: 'font-semibold text-frog-800',
    bar: 'bg-dark-600 h-0.5 transition-all duration-300',
    selectedBar: 'w-24 ',
    deselectedBar: 'w-0 '
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { SECTIONS } from './constants'

  export let extraClasses: string = ''
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

<div class="hidden lg:flex flex-col gap-4 {extraClasses}">
  {#each SECTIONS as section}
    <a
      href={section.link}
      title={section.title}
      class="{NAVBAR_BUTTON_STYLE.base} {section === selectedSection ? NAVBAR_BUTTON_STYLE.selectedSection : ''}"
    >
    <i class={section.icon} />
      <span
        class="{NAVBAR_BUTTON_STYLE.bar} {section === selectedSection
          ? NAVBAR_BUTTON_STYLE.selectedBar
          : NAVBAR_BUTTON_STYLE.deselectedBar}"
      />

     
      <span>{section.title}</span>
    </a>
  {/each}
</div>
