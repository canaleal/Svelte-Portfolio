<script lang="ts">
  import './style/style.css'
  export let title: string
  export let href: string
  export let isExternal: boolean = false
  export let extraClasses: string = ''
</script>

<a {href} {title} class="link {extraClasses}" target={isExternal ? '_blank' : ''} rel={isExternal ? 'noreferrer' : ''}>
  <slot />
</a>
