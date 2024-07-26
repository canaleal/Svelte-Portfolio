<script lang="ts">
  import './style/style.css'
  export let title: string
  export let href: string
  export let isExternal: boolean = false
</script>

<a {href} {title} class="link" target={isExternal ? '_blank' : ''} rel={isExternal ? 'noreferrer' : ''}>
  <slot />
</a>
