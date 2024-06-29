<script lang="ts">
  import DarkModeButton from '$lib/components/elements/darkModeButton.svelte'
  import ScrollButton from '$lib/components/elements/scrollButton.svelte'
  import '../styles/style.css'
</script>

<svelte:head>
  <title>Alex Canales Portfolio</title>
  <meta
    name="description"
    content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces."
  />
  <html lang="en" />
</svelte:head>

<div class="flex flex-col w-screen relative overflow-hidden bg-dark-700 text-smoke-100">
  <slot />
  <ScrollButton position="bottomRight" />
</div>
