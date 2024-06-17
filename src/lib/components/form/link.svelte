<script lang="ts">
  export let link: string
  export let title: string
  export let isExternal: boolean = link.startsWith('http')
  export let extraClasses: string = 'text-dark-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-600 font-bold'
</script>

<a
  href={link}
  target={isExternal ? '_blank' : '_self'}
  aria-label={title}
  rel="noreferrer"
  class="w-fit {extraClasses}  duration-200 flex flex-row gap-2 hover:gap-3 items-center"
>
  <slot />
</a>
