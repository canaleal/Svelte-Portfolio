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

<div class="content flex flex-col w-screen relative overflow-hidden text-dark-800 dark:text-white dark:bg-dark-800  ">
  <slot />
  <ScrollButton position="bottomRight" />
</div>
