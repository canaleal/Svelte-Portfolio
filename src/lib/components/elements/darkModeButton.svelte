<script lang="ts">
  import storage from '$lib/utils/storage'
  import { onMount } from 'svelte'
  import { FIXED_BUTTON_POSITION, FIXED_BUTTON_STYLE } from './fixedButton.svelte'

  export let position: keyof typeof FIXED_BUTTON_POSITION = 'topRight'
  let isDarkMode = storage.getToken()['isDark'] ?? false

  onMount(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    const token = storage.getToken()
    if (!token) return
    storage.setToken({
      ...token,
      isDark: newDarkMode
    })
    isDarkMode = newDarkMode
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
</script>

<button
  on:click={toggleDarkMode}
  class="{FIXED_BUTTON_STYLE.base} {FIXED_BUTTON_STYLE.color} {FIXED_BUTTON_POSITION[position]}"
>
  <i class="fa-solid {isDarkMode ? 'fa-sun' : 'fa-moon'}" />
</button>
