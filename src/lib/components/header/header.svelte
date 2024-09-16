<script lang="ts">
  import ContactIcons from './contactIcons.svelte'
</script>

<header id="Header">
  <div class="main-container  flex justify-between w-full items-center h-full px-8">
    <a href="/" class="text-xl uppercase font-extrabold">Alex Canales</a>
    <ContactIcons />
  </div>
</header>

<style lang="postcss">
  #Header {
    @apply w-screen fixed flex flex-col items-center bg-dark-900 text-white z-30 px-8  h-12;
  }
</style>
