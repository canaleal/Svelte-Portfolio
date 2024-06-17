<script context="module" lang="ts">
  export const positions = {
    topLeft: 'top-8 left-8',
    topRight: 'top-8 right-8',
    bottomLeft: 'bottom-8 left-8',
    bottomRight: 'bottom-8 right-8'
  }
</script>

<script lang="ts">
  import storage from '$lib/utils/storage'
  import { onMount } from 'svelte'

  export let position: keyof typeof positions = 'topRight'
  let darkMode = storage.getToken()['isDark'] ?? false

  onMount(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    const token = storage.getToken()
    if (!token) return
    storage.setToken({
      ...token,
      isDark: newDarkMode
    })
    darkMode = newDarkMode
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
</script>

<button
  on:click={toggleDarkMode}
  class={`z-50 fixed ${positions[position]} bg-navy-600 hover:bg-navy-800 text-zinc-50 font-bold py-2 px-4 rounded-md`}
>
  {#if darkMode}
    <i class="fa-solid fa-sun" />
  {:else}
    <i class="fa-solid fa-moon" />
  {/if}
</button>
