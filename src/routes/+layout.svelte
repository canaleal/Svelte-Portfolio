<script lang="ts">
  import ScrollButton from '$lib/components/elements/scrollButton.svelte'
  import '../styles/style.css'
</script>

<svelte:head>
  <title>Alex Canales Portfolio</title>
  <meta
    name="description"
    content="Explore Alex Canales' diverse portfolio showcasing proficiency in Svelte, featuring a collection of interactive web applications and user-friendly interfaces."
  />
</svelte:head>

<div class="flex flex-col w-screen relative overflow-hidden  bg-smoke-100 text-dark-100">
  <slot />
  <ScrollButton position="bottomRight" />
</div>
