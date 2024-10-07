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
    @apply w-screen fixed flex flex-col items-center backdrop-blur-sm bg-opacity-10  bg-dark-600/50 border-dark-500 border-b text-white z-30 px-8  h-20;
  }
</style>
